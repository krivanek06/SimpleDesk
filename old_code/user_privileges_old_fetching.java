 /**
 * multiple DB calls was repalce with sql function get_all_privileges_for_user_json(Integer) and json string parsing
 */

 public UserPrivilegeDTO getPrivilegesForUser(User user){
        UserPrivilegeDTO userPrivilegeDTO = new UserPrivilegeDTO();
        List<Group> groupInvolved = this.groupRepository.findAllByUsersInGroup(user);
        groupInvolved.forEach(group -> setGroupPrivilegeInformation(group));

        // distinct requests name to solve
        userPrivilegeDTO.setSolveRequests(groupInvolved.stream().flatMap(group -> group.getRequestTypesToSolve()
                .stream().map(RequestType::getName)).collect(Collectors.toList()));
        // distinct requests name to submit
        userPrivilegeDTO.setSubmitRequests(groupInvolved.stream().flatMap(group -> group.getRequestTypesToSubmit()
                .stream().map(RequestType::getName)).collect(Collectors.toList()));

        // distinct ticket types
        userPrivilegeDTO.setSolveTickets(this.getTicketPrivileges(groupInvolved));
        return userPrivilegeDTO;
    }
    
    private Map<String, List<String>> getTicketPrivileges(List<Group> groups){
        Map<String, List<String>> ticketPrivilegesHashMap = new HashMap<>();
        groups.forEach(group -> group.getTicketPrivilegesList().forEach(privilege -> {
            if(ticketPrivilegesHashMap.containsKey(privilege.getTicketType().getName())) {
                ticketPrivilegesHashMap.get(privilege.getTicketType().getName()).add(privilege.getApplicationName());
            }else {
                ticketPrivilegesHashMap.put(privilege.getTicketType().getName(), new ArrayList<>());
                ticketPrivilegesHashMap.get(privilege.getTicketType().getName()).add(privilege.getApplicationName());
            }
        }));
        return ticketPrivilegesHashMap;
    }

    private void setGroupPrivilegeInformation(Group group){
        group.setRequestTypesToSolve(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSolveDifferentRequests(group).orElse(new ArrayList<>())));
        group.setRequestTypesToSubmit(new HashSet<>(this.requestTypeRepository.findAllByGroupsToSubmitDifferentRequests(group).orElse(new ArrayList<>())));
        group.setTicketPrivilegesList(this.ticketPrivilegesRepository.findAllByGroup(group).orElse(new ArrayList<>()));
    }