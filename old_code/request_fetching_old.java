public RequestContainerDTO getAllOpenRequests(String username, UserPrivilegeDTO userPrivilegeDTO){
        RequestContainerDTO requestContainerDTO = new RequestContainerDTO();
        User currentlyLoggedInUser = this.userRepository.findByUsername(username).get();

        List<Request> openRequestWhichICreated = this.requestRepository.findAllByCreatorAndClosedIsNull(currentlyLoggedInUser);
        List<Request> openRequestsAssignedToMe = this.requestRepository.findAllByAssignedAndClosedIsNull(currentlyLoggedInUser);
        List<Request> watchedRequestsByUser = this.requestRepository.findAllByUserWhoWatchThisRequestContains(currentlyLoggedInUser);
        Map<String, List<Request>> requestsAssignedToMyTeam = new HashMap<>();
        Map<String, List<Request>> requestSendByMyTeam = new HashMap<>();
        List<Request> openRequests = new ArrayList<>();
        requestContainerDTO.setRequestsOpen(openRequests);

        // get open requests which users of my team created or are assigned to
        List<Group> managedGroups = this.groupRepository.findAllByGroupManager(currentlyLoggedInUser).orElse(new ArrayList<>());
        if(!managedGroups.isEmpty()){
            managedGroups.forEach(group -> this.userRepository.findAllByGroupsInvolved(group).stream()
                .filter(user -> !user.getUsername().equalsIgnoreCase(currentlyLoggedInUser.getUsername())) // except me
                .forEach(user -> {
                    if(!requestSendByMyTeam.containsKey(group.getGroupName())){
                        requestSendByMyTeam.put(group.getGroupName() , new ArrayList<>());
                        requestsAssignedToMyTeam.put(group.getGroupName() , new ArrayList<>());
                    }
                    requestSendByMyTeam.get(group.getGroupName()).addAll(this.requestRepository.findAllByCreatorAndClosedIsNull(user));
                    requestsAssignedToMyTeam.get(group.getGroupName()).addAll(this.requestRepository.findAllByAssignedAndClosedIsNull(user));
                })
            );
        }
        /**
         * requests which are open, I am not a creator, but I have privilege to see them
         */
        if(!userPrivilegeDTO.getSolveRequests().isEmpty()) {
            List<RequestType> requestTypesAllowedToSolve = this.requestTypeRepository.findAllByNameIn(userPrivilegeDTO.getSolveRequests());

            // only if solver can solve request type ticket -> then load privilege to solve tickets -> software, user, server etc.
            if(requestTypesAllowedToSolve.stream().anyMatch(requestType -> requestType.getName().equalsIgnoreCase(REQUEST_TYPE.TICKET.toString()))){
                List<TicketType> ticketTypePrivileges = this.ticketTypeRepository.findAllByNameIn(userPrivilegeDTO.getSolveTickets().keySet());
                openRequests = this.ticketRepository.findAllByTicketTypeInAndClosedIsNull(ticketTypePrivileges).stream().filter(
                        ticket -> ticket.getTicketType().getName().equalsIgnoreCase(TICKET_TYPE.OTHER.toString()) ||
                                ticket.getTicketType().getName().equalsIgnoreCase(TICKET_TYPE.USER.toString()) ||
                                (userPrivilegeDTO.getSolveTickets().containsKey(ticket.getTicketType().getName()) &&
                                        userPrivilegeDTO.getSolveTickets().get(ticket.getTicketType().getName()).contains(ticket.getTicketSubtypeName()))
                ).collect(Collectors.toList());
            }
            // fetch rest of open requests -> reports , finance
            List<Request>  finalOpenRequests = openRequests;
            requestTypesAllowedToSolve.stream().filter(requestType -> !requestType.getName().equalsIgnoreCase(REQUEST_TYPE.TICKET.toString())).
                    forEach(requestType -> finalOpenRequests.addAll(this.requestRepository.findAllByRequestTypeAndClosedIsNull(requestType)
                            .orElse(new ArrayList<>())));

            requestContainerDTO.setRequestsOpen(finalOpenRequests);
        }

        requestContainerDTO.setRequestsWatchedByUser(watchedRequestsByUser);
        requestContainerDTO.setRequestsAssignedToUser(openRequestsAssignedToMe);
        requestContainerDTO.setRequestsCreatedByUser(openRequestWhichICreated);
        requestContainerDTO.setRequestsAssignedToMyTeam(requestsAssignedToMyTeam);
        requestContainerDTO.setRequestSendByMyTeam(requestSendByMyTeam);

        return requestContainerDTO;
    }