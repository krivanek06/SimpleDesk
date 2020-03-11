DROP TABLE IF EXISTS tbl_reminders CASCADE;
create table tbl_reminders(
  id serial primary key,
  timestamp_creation TIMESTAMP NOT NULL,
  timestamp_reminder TIMESTAMP NOT NULL,
  user_id Integer NOT NULL,
  subject varchar(255) NOT NULL,
  description varchar,
  allow_commenting boolean default True
);
DROP TABLE IF EXISTS tbl_reminder_comments CASCADE;
create table tbl_reminder_comments(
   id serial primary key,
   user_id integer NOT NULL,
   reminder_id integer NOT NULL,
   comment varchar NOT NULL,
   timestamp TIMESTAMP NOT NULL
);
DROP TABLE IF EXISTS tbl_shared_reminders CASCADE;
create table tbl_shared_reminders(
   id serial primary key NOT NULL,
   reminder_id Integer,
   user_id Integer
);


DROP TABLE IF EXISTS tbl_documents CASCADE;
create table tbl_documents(
  id serial primary key,
  path varchar NOT NULL,
  title varchar,
  description varchar
);

DROP TABLE IF EXISTS tbl_document_to_users CASCADE;
create table tbl_document_to_users(
  id serial primary key,
  document_id Integer NOT NULL,
  user_id Integer NOT NULL,
  seen boolean NOT NULL default False
);

DROP TABLE IF EXISTS tbl_users CASCADE;
create table tbl_users(
  id serial primary key,
  username varchar(255) unique NOT NULL,
  password varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  photo varchar default 'user.png',
  email varchar NOT NULL,
  active boolean default True,
  timestamp_creation TIMESTAMP default current_timestamp,
  timestamp_ending TIMESTAMP default NULL
);

DROP TABLE IF EXISTS tbl_request_comments CASCADE;
create table tbl_request_comments(
   id serial primary key,
   request_id Integer NOT NULL,
   user_id Integer NOT NULL,
   comment text,
   is_private boolean default false,
   timestamp TIMESTAMP default current_timestamp
);
DROP TABLE IF EXISTS tbl_requests CASCADE;
create table tbl_requests(
   id serial primary key,
   timestamp_creation TIMESTAMP default current_timestamp,
   timestamp_closed TIMESTAMP,
   priority_id Integer NOT NULL,
   creator_uid Integer NOT NULL,
   assigned_uid Integer,
   closed_uid Integer,
   subject varchar NOT NULL,
   solution_comment_id integer,
   allow_commenting boolean default True,
   position_id Integer,
   type_id Integer NOT NULL
);

DROP TABLE IF EXISTS tbl_reports CASCADE;
create table tbl_reports(
  id serial primary key,
  request_id Integer NOT NULL,
  r_owner varchar(255) NOT NULL,
  r_purpose varchar NOT NULL,
  r_criteria varchar NOT NULL,
  r_visible_data varchar,
  r_other_info varchar,
  r_refresh_id Integer NOT NULL,
  r_access_people varchar,
  r_access_method varchar,
  r_deadline date,
  r_evaluation double precision,
  r_type_id Integer NOT NULL

);
DROP TABLE IF EXISTS tbl_report_types CASCADE;
create table tbl_report_types(
   id serial primary key,
   name varchar(255) NOT NULL
);
DROP TABLE IF EXISTS tbl_report_refreshes CASCADE;
create table tbl_report_refreshes(
   id serial primary key,
   name varchar(255) NOT NULL
);


DROP TABLE IF EXISTS tbl_request_positions CASCADE;
create table tbl_request_positions(
  id serial primary key,
  name varchar(255)
);
DROP TABLE IF EXISTS tbl_request_priorities CASCADE;
create table tbl_request_priorities(
   id serial primary key,
   name varchar(255),
   color varchar(15)
);
DROP TABLE IF EXISTS tbl_hardwares CASCADE;
create table tbl_hardwares(
  id serial primary key,
  ticket_type_id integer not null,
  name varchar not null ,
  sequence integer,
  active boolean default True
);
DROP TABLE IF EXISTS tbl_servers CASCADE;
create table tbl_servers(
  id serial primary key,
  ticket_type_id integer not null,
  name varchar  not null ,
  sequence integer,
  active boolean default True
);
DROP TABLE IF EXISTS tbl_server_contacts CASCADE;
create table tbl_server_contacts(
  id serial primary key,
  server_id Integer NOT NULL,
  contact_name varchar NOT NULL,
  contact_email varchar,
  contact_mobile varchar,
  active boolean default True
);
DROP TABLE IF EXISTS tbl_tickets CASCADE;
create table tbl_tickets(
  id serial primary key,
  request_id Integer NOT NULL,
  t_type_id Integer NOT NULL, -- tells if it is SW / HW / UserID / SErver
  t_application_name varchar(255), -- name of SW.types, HW.types , Server.types, User -> everything in one column, t_type_id will help in decision
  t_request varchar NOT NULL -- request problem
);

DROP TABLE IF EXISTS tbl_ticket_types CASCADE;
create table tbl_ticket_types(
 id serial primary key,
 name varchar NOT NULL,
 sequence integer,
 active boolean default True
);
DROP TABLE IF EXISTS tbl_softwares CASCADE;
create table tbl_softwares(
  id serial primary key,
  ticket_type_id integer not null,
  name varchar NOT NULL,
  sequence integer,
  active boolean default True
);

DROP TABLE IF EXISTS tbl_ticket_privileges CASCADE;
create table tbl_ticket_privileges(
   id serial primary key,
   group_id integer not null,
   ticket_type_id integer not null,
   application_name varchar(255),
   unique(group_id , ticket_type_id , application_name)
);


DROP TABLE IF EXISTS tbl_module_type CASCADE;
create table tbl_module_type(
  id serial primary key,
  name varchar(255) NOT NULL unique,
  active boolean default True
);


DROP TABLE IF EXISTS tbl_groups CASCADE;
create table tbl_groups(
  id serial primary key,
  name varchar(255) NOT NULL unique,
  email varchar(255),
  description varchar,
  manager_id integer
);
DROP TABLE IF EXISTS tbl_user_groups CASCADE;
create table tbl_user_groups(
  id serial primary key,
  user_id Integer NOT NULL,
  group_id Integer NOT NULL
);

DROP TABLE IF EXISTS tbl_working_days CASCADE;
create table tbl_working_days(
   id serial primary key,
   timestamp_from TIMESTAMP NOT NULL,
   timestamp_to TIMESTAMP,
   user_id Integer NOT NULL,
   working_day_type_id integer
);
DROP TABLE IF EXISTS tbl_working_day_types CASCADE;
create table tbl_working_day_types(
  id serial primary key,
  name varchar unique --praca , lekar, dovolenka, meeting atd.
);


DROP TABLE IF EXISTS tbl_request_watched_by_user CASCADE;
create table tbl_request_watched_by_user(
  id serial primary key,
  user_id Integer NOT NULL,
  request_id Integer NOT NULL
);

DROP TABLE IF EXISTS tbl_request_type_to_solve CASCADE;
create table tbl_request_type_to_solve
(
   id serial primary key,
   group_id int ,
   request_type_id int
);

DROP TABLE IF EXISTS tbl_module_type_to_use CASCADE;
create table tbl_module_type_to_use(
   id serial primary key,
   group_id int ,
   request_type_id int
);

DROP TABLE IF EXISTS tbl_request_comments_shared CASCADE;
create table tbl_request_comments_shared(
  id serial primary key,
  group_id int,
  request_comment_id int
);

DROP TABLE IF EXISTS tbl_finance_types CASCADE;
create table tbl_finance_types(
  id serial primary key,
  name varchar(500) not null,
  active boolean default true
);

DROP TABLE IF EXISTS tbl_finances CASCADE;
create table tbl_finances(
   id serial primary key,
   request_id int not null,
   finance_type_id int not null
);

DROP TABLE IF EXISTS tbl_finance_type_privileges CASCADE;
create table tbl_finance_type_privileges(
  id serial primary key,
  finance_type_id int not null,
  group_id int not null,
  unique (finance_type_id, group_id)
);

-- watch group just 1 layer, not nested
DROP TABLE IF EXISTS tbl_group_activity_watched_by_user CASCADE;
create table tbl_group_activity_watched_by_user(
  id serial primary key,
  group_id integer not null,
  user_id Integer not null
);
DROP TABLE IF EXISTS tbl_request_logs CASCADE;
create table tbl_request_logs(
    id serial primary key,
    request_id int,
    user_id int,
    log_message varchar,
    timestamp_creation timestamp,
    timestamp_closed timestamp
);




alter table tbl_request_logs add foreign key(request_id) references tbl_requests(id);
alter table tbl_request_logs add foreign key(user_id) references tbl_users(id);

ALTER TABLE tbl_group_activity_watched_by_user ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_group_activity_watched_by_user ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);

ALTER TABLE tbl_reminders  ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_reminder_comments ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_reminder_comments ADD FOREIGN KEY (reminder_id) REFERENCES tbl_reminders(id);

ALTER TABLE tbl_shared_reminders ADD FOREIGN KEY (reminder_id) REFERENCES tbl_reminders(id);
ALTER TABLE tbl_shared_reminders ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_document_to_users ADD FOREIGN KEY (document_id) REFERENCES tbl_documents(id);
ALTER TABLE tbl_document_to_users ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_request_comments ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);
ALTER TABLE tbl_request_comments ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_reports ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);
ALTER TABLE tbl_reports ADD FOREIGN KEY (r_refresh_id) REFERENCES tbl_report_refreshes(id);
ALTER TABLE tbl_reports ADD FOREIGN KEY (r_type_id) REFERENCES tbl_report_types(id);

ALTER TABLE tbl_requests ADD FOREIGN KEY (priority_id) REFERENCES tbl_request_priorities(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (creator_uid) REFERENCES tbl_users(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (assigned_uid) REFERENCES tbl_users(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (solution_comment_id) REFERENCES tbl_request_comments(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (closed_uid) REFERENCES tbl_users(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (position_id) REFERENCES tbl_request_positions(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (type_id) REFERENCES tbl_module_type(id);

ALTER TABLE tbl_request_watched_by_user ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_request_watched_by_user ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);

ALTER TABLE tbl_working_days ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_working_days ADD FOREIGN KEY (working_day_type_id) REFERENCES tbl_working_day_types(id);


ALTER TABLE tbl_user_groups ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_user_groups ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);

ALTER TABLE tbl_ticket_privileges ADD FOREIGN KEY (ticket_type_id) REFERENCES tbl_ticket_types(id);
ALTER TABLE tbl_ticket_privileges ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);

ALTER TABLE tbl_tickets ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);
ALTER TABLE tbl_tickets ADD FOREIGN KEY (t_type_id) REFERENCES tbl_ticket_types(id);

ALTER TABLE tbl_server_contacts ADD FOREIGN KEY (server_id) REFERENCES tbl_servers(id);

ALTER TABLE tbl_servers ADD FOREIGN KEY (ticket_type_id) REFERENCES tbl_ticket_types(id);
ALTER TABLE tbl_softwares ADD FOREIGN KEY (ticket_type_id) REFERENCES tbl_ticket_types(id);
ALTER TABLE tbl_hardwares ADD FOREIGN KEY (ticket_type_id) REFERENCES tbl_ticket_types(id);

ALTER TABLE tbl_groups add  FOREIGN KEY (manager_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_request_type_to_solve ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);
ALTER TABLE tbl_request_type_to_solve ADD FOREIGN KEY (request_type_id) REFERENCES tbl_module_type(id);

ALTER TABLE tbl_module_type_to_use ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);
ALTER TABLE tbl_module_type_to_use ADD FOREIGN KEY (request_type_id) REFERENCES tbl_module_type(id);

ALTER TABLE tbl_request_comments_shared ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);
ALTER TABLE tbl_request_comments_shared ADD FOREIGN KEY (request_comment_id) REFERENCES tbl_request_comments(id);

alter table tbl_finance_type_privileges add foreign key(finance_type_id) references tbl_finance_types(id);
alter table tbl_finance_type_privileges add foreign key(group_id) references tbl_groups(id);

alter table tbl_finances add foreign key(request_id) references tbl_requests(id);
alter table tbl_finances add foreign key(finance_type_id) references tbl_finance_types(id);


create table hibernate_sequences (sequence_name varchar(255) not null, next_val int8, primary key (sequence_name));
insert into hibernate_sequences(sequence_name, next_val) values ('default',0);






-- helping functions


-- get all privileges for user what he can submit or solve
drop function if exists get_all_privileges_for_user_varchar(varchar);
CREATE FUNCTION get_all_privileges_for_user_varchar(searching_name varchar)
RETURNS varchar AS
$$
select json_build_object(
'ticketTypeToSolve' ,
    (select jsonb_agg(ticket_priv) from
    (select  json_build_object(tbl_ticket_types.name,
    jsonb_agg(distinct tbl_ticket_privileges.application_name)) as ticket_priv
    from (select id as uid from tbl_users users where users.username = searching_name ) as t_user
    inner join tbl_user_groups as tug on tug.user_id = t_user.uid
    inner join tbl_ticket_privileges on tbl_ticket_privileges.group_id = tug.group_id
    left join tbl_ticket_types on tbl_ticket_types.id = tbl_ticket_privileges.ticket_type_id
    group by tbl_ticket_types.name) as tbl) ,
'moduleTypeToUse' ,
    (select jsonb_agg(distinct tbl_module_type.name) from (
    select id as uid from tbl_users users where users.username = searching_name ) as t_user
    inner join tbl_user_groups as tug on tug.user_id = t_user.uid
    inner join tbl_module_type_to_use on tbl_module_type_to_use.group_id = tug.group_id
    left join tbl_module_type on tbl_module_type.id = tbl_module_type_to_use.request_type_id),
'requestTypeToSolve',
    (select jsonb_agg(distinct tbl_module_type.name) from (
    select id as uid from tbl_users users where users.username = searching_name) as t_user
    inner join tbl_user_groups as tug on tug.user_id = t_user.uid
    inner join tbl_request_type_to_solve on tbl_request_type_to_solve.group_id = tug.group_id
    left join tbl_module_type on tbl_module_type.id = tbl_request_type_to_solve.request_type_id),
'financeTypeToSubmit',
    (select jsonb_agg(distinct tbl_finance_types.name) from (
    select id as uid from tbl_users users where users.username = searching_name ) as t_user
    inner join tbl_user_groups as tug on tug.user_id = t_user.uid
    inner join tbl_finance_type_privileges on tbl_finance_type_privileges.group_id = tug.group_id
    left join tbl_finance_types on tbl_finance_types.id = tbl_finance_type_privileges.finance_type_id))::varchar;
$$ LANGUAGE sql;

-- get all privileges for group what it can submit or solve
drop function if exists get_all_privileges_for_group_varchar(varchar);
CREATE FUNCTION get_all_privileges_for_group_varchar(searching_name varchar)
RETURNS varchar AS
$$
select json_build_object(
'ticketTypeToSolve' ,
(select jsonb_agg(ticket_priv) from(
  select  json_build_object(tbl_ticket_types.name,
  jsonb_agg(distinct tbl_ticket_privileges.application_name)) as ticket_priv
          from tbl_ticket_privileges
          left join tbl_ticket_types on tbl_ticket_types.id = tbl_ticket_privileges.ticket_type_id
          where tbl_ticket_privileges.group_id = (select id from tbl_groups where name = searching_name)
          group by tbl_ticket_types.name) as tbl) ,
'moduleTypeToUse' ,
(select jsonb_agg( distinct t.name) from (
        select  tbl_module_type.name from tbl_module_type
        inner join tbl_module_type_to_use on tbl_module_type.id = tbl_module_type_to_use.request_type_id
        where tbl_module_type_to_use.group_id = (select id from tbl_groups where name = searching_name) ) as t),
'requestTypeToSolve',
(select jsonb_agg(distinct t.name) from (
       select tbl_module_type.name from tbl_module_type
       inner join tbl_request_type_to_solve on tbl_module_type.id = tbl_request_type_to_solve.request_type_id
       where tbl_request_type_to_solve.group_id = (select id from tbl_groups where name = searching_name) ) as t),
'financeTypeToSubmit',
(select jsonb_agg(distinct t.name) from (
       select  tbl_finance_types.name from tbl_finance_types
       inner join tbl_finance_type_privileges  on tbl_finance_types.id = tbl_finance_type_privileges.finance_type_id
       where tbl_finance_type_privileges.group_id = (select id from tbl_groups where name = searching_name)) as t))::varchar;
$$ LANGUAGE sql;



drop function if exists get_all_existing_privileges();
CREATE or replace FUNCTION get_all_existing_privileges()
    RETURNS varchar AS
$$
select json_build_object(
       'ticketTypeToSolve' ,  (
    select jsonb_agg(t) from( select json_build_object(
             'Software' , (select jsonb_agg( t.name) from ( select  tbl_softwares.name from tbl_softwares ) as t) ,
             'Hardware' , (select jsonb_agg( t.name) from ( select  tbl_hardwares.name from tbl_hardwares ) as t) ,
             'Server' , (select jsonb_agg( t.name) from ( select  tbl_servers.name from tbl_servers ) as t) ,
             'User', null,
             'Other', null
         ) as t) as t ),
       'moduleTypeToUse' , (select jsonb_agg( distinct t.name) from ( select  tbl_module_type.name from tbl_module_type ) as t),
       'requestTypeToSolve',(select jsonb_agg(distinct t.name) from (select tbl_module_type.name from tbl_module_type ) as t),
       'financeTypeToSubmit',(select jsonb_agg(distinct t.name) from (select  tbl_finance_types.name from tbl_finance_types) as t)
   )::varchar;
$$ LANGUAGE sql;



-- decide on request type [ticket, report, finance] what additional information to return
drop function if exists get_additional_information_for_request(searching_id integer);
CREATE FUNCTION get_additional_information_for_request(searching_id integer)
    RETURNS varchar AS $$
select
    case
        when rt.name = 'Ticket' then tbl_tickets.t_application_name
        when rt.name = 'Report' then tbl_report_types.name
        when rt.name = 'Finance' then tbl_finance_types.name
        else null
        end as additional_info

from tbl_requests r
         inner join tbl_module_type rt on rt.id = r.type_id
         left join tbl_tickets on tbl_tickets.request_id = r.id
         left join tbl_reports on tbl_reports.request_id = r.id
         left join tbl_report_types on tbl_report_types.id = tbl_reports.r_type_id
         left join tbl_finances on tbl_finances.request_id = r.id
         left join tbl_finance_types on tbl_finance_types.id = tbl_finances.finance_type_id
where r.id = searching_id
order by r.id asc;
$$ LANGUAGE sql;




-- get all open requests on dashboard page
drop function if exists get_requests_on_dashboard_for_user_varchar(varchar);
CREATE OR REPLACE FUNCTION get_requests_on_dashboard_for_user_varchar(searching_name varchar)
    RETURNS varchar AS $$
select json_build_object(
-- my open requests
'my_open_requests', (
select json_agg( json_build_object(
'id', id, 'requestPriority', requestPriority, 'additionalInformation' , additionalInformation ,'name' , subject,'requestType' , name, 'creator', creator,'creatorImageString', creatorImageString,
'assigned' ,assigned, 'assignedImageString', assignedImageString,'timestampCreation', creation, 'logs',
(select json_agg(log_message) from tbl_request_logs
 where request_id = t.id and user_id = (select id from tbl_users where username = searching_name) and timestamp_closed is null)
) ) as my_open_requests
from (
 select r.id , trp.name as requestPriority,  t1.additionalInformation,  r.subject, rt.name,
        case when assigned.first_name is null then ''
             else concat(substring(assigned.first_name from 1 for 1), '. ',assigned.last_name )
            end as assigned,
        assigned.photo as assignedImageString ,
        concat(substring(creator.first_name from 1 for 1), '. ',creator.last_name ) as creator, creator.photo as creatorImageString, r.timestamp_creation as creation
 from tbl_requests r
          inner join tbl_module_type rt on rt.id = r.type_id
          inner join tbl_users creator on creator.id  = r.creator_uid
          inner join tbl_request_priorities trp on trp.id = r.priority_id
          cross join lateral (select get_additional_information_for_request as additionalInformation from get_additional_information_for_request(r.id)) as t1
          left join tbl_users assigned on assigned.id = r.assigned_uid
 where r.creator_uid = (select id from tbl_users where tbl_users.username = searching_name) and closed_uid is null
 order by id desc
) as t
),
-- assigned on me and still open
'assigned_on_me', (
select json_agg( json_build_object(
       'id', id, 'requestPriority', requestPriority, 'additionalInformation' , additionalInformation , 'name' , subject,'requestType' , name, 'creator', creator,'creatorImageString', creatorImageString,
       'assigned' ,assigned,'assignedImageString', assignedImageString , 'timestampCreation', creation,
       'logs',(select json_agg(log_message) from tbl_request_logs
               where request_id = t.id and user_id = (select id from tbl_users where username = searching_name) and timestamp_closed is null)
   ) ) as assigned_on_me
from (select r.id , trp.name as requestPriority,  t1.additionalInformation, r.subject, rt.name,
            case when assigned.first_name is null then ''
                 else concat(substring(assigned.first_name from 1 for 1), '. ',assigned.last_name )
                end as assigned,
            assigned.photo as assignedImageString,
            concat(substring(creator.first_name from 1 for 1), '. ',creator.last_name ) as creator, creator.photo as creatorImageString, r.timestamp_creation as creation
     from tbl_requests r
              inner join tbl_module_type rt on rt.id = r.type_id
              inner join tbl_users creator on creator.id  = r.creator_uid
              inner join tbl_request_priorities trp on trp.id = r.priority_id
              cross join lateral (select get_additional_information_for_request as additionalInformation from get_additional_information_for_request(r.id)) as t1
              left join tbl_users assigned on assigned.id = r.assigned_uid
     where r.assigned_uid = (select id from tbl_users where tbl_users.username = searching_name) and closed_uid is null
     order by id desc)
        as t ),
-- open requests assigned by members of my team
'all_open_requests', (
select json_agg( json_build_object(
       'id', id, 'requestPriority', requestPriority, 'additionalInformation' , additionalInformation , 'name' , subject,'requestType' , name,'creator', creator, 'creatorImageString', creatorImageString,
       'assigned' , assigned, 'assignedImageString', assignedImageString , 'timestampCreation' , creation,
       'logs',(select json_agg(log_message) from tbl_request_logs
               where request_id = t.id and user_id = (select id from tbl_users where username = searching_name) and timestamp_closed is null)
   ) )
          as all_open_requests
from (

        select r.id , trp.name as requestPriority, t1.additionalInformation,  r.subject, rt.name,
               case when assigned.first_name is null then ''
                    else concat(substring(assigned.first_name from 1 for 1), '. ',assigned.last_name )
                   end as assigned,
               assigned.photo as assignedImageString,
               concat(substring(creator.first_name from 1 for 1), '. ',creator.last_name ) as creator, creator.photo as creatorImageString, r.timestamp_creation as creation
        from tbl_requests r
                 inner join tbl_module_type rt on rt.id = r.type_id
                 inner join tbl_users creator on creator.id  = r.creator_uid
                 inner join tbl_request_priorities trp on trp.id = r.priority_id
                 left join tbl_users assigned on assigned.id = r.assigned_uid
                 left join tbl_tickets on  tbl_tickets.request_id = r.id
                 left join tbl_ticket_types on tbl_ticket_types.id = tbl_tickets.t_type_id
                 cross join lateral (select get_additional_information_for_request as additionalInformation from get_additional_information_for_request(r.id)) as t1
        where r.closed_uid is null and
            (
-- get privileges
(
-- get privileges if I can solve reports or tickets
    (rt.name != 'Ticket' AND ( select get_all_privileges_for_user_varchar::jsonb->'requestTypeToSolve' ? rt.name from get_all_privileges_for_user_varchar( searching_name)) ) OR
    -- get privileges on ticket types
(rt.name = 'Ticket' AND (select case
    when  tbl_ticket_types.name = 'User' or tbl_ticket_types.name = 'Other'
        then ( select  get_all_privileges_for_user_varchar::jsonb->>'ticketTypeToSolve'
                           like concat('%',tbl_ticket_types.name,'%')  from get_all_privileges_for_user_varchar( searching_name))
    else (select  get_all_privileges_for_user_varchar::jsonb->>'ticketTypeToSolve'
                      like concat('%',t_application_name,'%') from get_all_privileges_for_user_varchar( searching_name))
    end as contain)
)
)
OR -- assigned / sent on member in group where i am manager or watching
(
        r.creator_uid in (select user_id from tbl_user_groups where group_id in (
        select id from tbl_groups
        where manager_id = (select id from tbl_users where tbl_users.username = searching_name)
        UNION
        select group_id from tbl_group_activity_watched_by_user
        where user_id = (select id from tbl_users where tbl_users.username = searching_name)))
    OR
        r.assigned_uid in (select user_id from tbl_user_groups where group_id in (
            select id from tbl_groups
            where manager_id = (select id from tbl_users where tbl_users.username = searching_name)
            UNION
            select group_id from tbl_group_activity_watched_by_user
            where user_id = (select id from tbl_users where tbl_users.username = searching_name)))
))
and  -- remove another table
(r.assigned_uid is null or  r.assigned_uid  != (select id from tbl_users where tbl_users.username = searching_name)) and
r.creator_uid != (select id from tbl_users where tbl_users.username = searching_name)
order by id desc) as t ))::varchar;
$$ LANGUAGE sql;


drop function if exists get_all_requests_on_dashboard();
CREATE OR REPLACE FUNCTION get_all_requests_on_dashboard()
    RETURNS varchar AS $$
select json_build_object(
   'my_open_requests',null,
   'assigned_on_me',null,
   'all_open_requests', (
   select json_agg( json_build_object(
           'id', id, 'requestPriority', requestPriority, 'additionalInformation' , additionalInformation ,'name' , subject,'requestType' , name, 'creator', creator,'creatorImageString', creatorImageString,
           'assigned' ,assigned, 'assignedImageString', assignedImageString,'timestampCreation', creation  ) ) as my_open_requests
   from (select r.id , trp.name as requestPriority,  t1.additionalInformation,  r.subject, rt.name,
                case when assigned.first_name is null then ''
                     else concat(substring(assigned.first_name from 1 for 1), '. ',assigned.last_name )
                    end as assigned,
             assigned.photo as assignedImageString ,
            concat(substring(creator.first_name from 1 for 1), '. ',creator.last_name ) as creator, creator.photo as creatorImageString, r.timestamp_creation as creation
     from tbl_requests r
              inner join tbl_module_type rt on rt.id = r.type_id
              inner join tbl_users creator on creator.id  = r.creator_uid
              inner join tbl_request_priorities trp on trp.id = r.priority_id
              cross join lateral (select get_additional_information_for_request as additionalInformation
                    from get_additional_information_for_request(r.id)) as t1
              left join tbl_users assigned on assigned.id = r.assigned_uid
     where closed_uid is null order by id desc) as t
   ))::varchar;
$$ LANGUAGE sql;



drop function if exists get_finance_types_to_submit_for_user(varchar);
CREATE OR REPLACE FUNCTION get_finance_types_to_submit_for_user(searching_name varchar)
RETURNS TABLE(id integer, name varchar, active boolean) AS $$
BEGIN
    RETURN QUERY
    select tbl_finance_types.id  , tbl_finance_types.name ,tbl_finance_types.active from tbl_finance_types where tbl_finance_types.id in (
        select distinct finance_type_id from tbl_finance_type_privileges where group_id in (
            select group_id from tbl_user_groups where user_id = (select tbl_users.id from tbl_users where username = searching_name))
    ) order by id asc;
END;
$$ LANGUAGE plpgsql;



-- applied for admin / ghost
drop function if exists get_all_closed_requests(varchar, varchar);
CREATE FUNCTION get_all_closed_requests(date_closed1 varchar, date_closed2 varchar)
    RETURNS varchar AS $$
select json_build_object( 'closed_requests' , (
select json_agg( json_build_object(
    'id', id, 'requestPriority', requestPriority, 'additionalInformation' , additionalInformation , 'name' , subject,'requestType' , name,'creator', creator, 'creatorImageString', creatorImageString,
    'closed' , closed, 'closedImageString', closedImageString , 'timestampCreation' , creation, 'timestampClosed', closing) )
       as closed_requests
from (
     select r.id , trp.name as requestPriority, t1.additionalInformation,  r.subject, rt.name, concat(substring(closed.first_name from 1 for 1), '. ',closed.last_name ) as closed, closed.photo as closedImageString,
            concat(substring(creator.first_name from 1 for 1), '. ',creator.last_name ) as creator, creator.photo as creatorImageString, r.timestamp_creation as creation, r.timestamp_closed as closing
     from tbl_requests r
              inner join tbl_module_type rt on rt.id = r.type_id
              inner join tbl_users creator on creator.id  = r.creator_uid
              inner join tbl_request_priorities trp on trp.id = r.priority_id
              inner join tbl_users closed on closed.id = r.closed_uid
              left join tbl_users assigned on assigned.id = r.assigned_uid
              left join tbl_tickets on  tbl_tickets.request_id = r.id
              left join tbl_ticket_types on tbl_ticket_types.id = tbl_tickets.t_type_id
              cross join lateral (select get_additional_information_for_request as additionalInformation
                from get_additional_information_for_request(r.id)) as t1
     where r.closed_uid is not null and r.timestamp_closed >= date_closed1::timestamp
        and r.timestamp_closed <= (date_closed2::timestamp + INTERVAL '1day')
     order by timestamp_closed desc) as t))::varchar
$$ LANGUAGE sql;




drop function if exists get_closed_requests_for_user_varchar(Integer, varchar, varchar, varchar);
CREATE FUNCTION get_closed_requests_for_user_varchar(searching_id Integer, searching_name varchar, date_closed1 varchar, date_closed2 varchar)
RETURNS varchar AS $$
select json_build_object( 'closed_requests' , (
select json_agg( json_build_object(
'id', id, 'requestPriority', requestPriority, 'additionalInformation' , additionalInformation , 'name' , subject,'requestType' , name,'creator', creator, 'creatorImageString', creatorImageString,
'closed' , closed, 'closedImageString', closedImageString , 'timestampCreation' , creation, 'timestampClosed', closing) )
as closed_requests
from (
select r.id , trp.name as requestPriority, t1.additionalInformation,  r.subject, rt.name, concat(substring(closed.first_name from 1 for 1), '. ',closed.last_name ) as closed, closed.photo as closedImageString,
concat(substring(creator.first_name from 1 for 1), '. ',creator.last_name ) as creator, creator.photo as creatorImageString, r.timestamp_creation as creation, r.timestamp_closed as closing
from tbl_requests r
inner join tbl_module_type rt on rt.id = r.type_id
inner join tbl_users creator on creator.id  = r.creator_uid
inner join tbl_request_priorities trp on trp.id = r.priority_id
inner join tbl_users closed on closed.id = r.closed_uid
left join tbl_users assigned on assigned.id = r.assigned_uid
left join tbl_tickets on  tbl_tickets.request_id = r.id
left join tbl_ticket_types on tbl_ticket_types.id = tbl_tickets.t_type_id
cross join lateral (select get_additional_information_for_request as additionalInformation from get_additional_information_for_request(r.id)) as t1
where r.closed_uid is not null and ((
-- get privileges if I can solve reports or tickets
(rt.name != 'Ticket' AND ( select get_all_privileges_for_user_varchar::jsonb->'requestTypeToSolve' ? rt.name
from get_all_privileges_for_user_varchar( searching_name)) )
OR
-- get privileges on ticket types
    (rt.name = 'Ticket' AND (select case
    when  tbl_ticket_types.name = 'User' or tbl_ticket_types.name = 'Other' then (
    select  get_all_privileges_for_user_varchar::jsonb->>'ticketTypeToSolve'
    like concat('%',tbl_ticket_types.name,'%')  from get_all_privileges_for_user_varchar(searching_name))
    else (select  get_all_privileges_for_user_varchar::jsonb->>'ticketTypeToSolve'
    like concat('%',t_application_name,'%') from get_all_privileges_for_user_varchar(searching_name))
    end as contain
    )  )
) or
-- assigned somebody from my team
r.assigned_uid  in (select distinct user_id from  tbl_user_groups where group_id in (
select id from  tbl_groups where manager_id = searching_id
        union
        select group_id from tbl_group_activity_watched_by_user where user_id = searching_id)
    union
    select searching_id
)
-- sent somebody from my team
or r.creator_uid in (select distinct user_id from  tbl_user_groups where group_id in(
        select id from  tbl_groups where manager_id =  searching_id
        union
        select group_id from tbl_group_activity_watched_by_user where user_id = searching_id)
    union
    select searching_id
)
-- closed somebody from my team
    or r.closed_uid in (select distinct user_id from  tbl_user_groups where group_id in (
        select id from  tbl_groups where manager_id =  searching_id
        union
        select group_id from tbl_group_activity_watched_by_user where user_id = searching_id)
    union
    select searching_id
    )

    ) and r.timestamp_closed >= date_closed1::timestamp and r.timestamp_closed <= (date_closed2::timestamp + INTERVAL '1day')
    order by timestamp_closed desc
    ) as t))::varchar
$$ LANGUAGE sql;


drop function if exists get_access_for_request(searching_request_id integer, request_type varchar, user_name varchar);
CREATE FUNCTION get_access_for_request(searching_request_id integer,  request_type varchar, user_name varchar)
    RETURNS boolean AS $$
select
case
    when request_type != 'Ticket' then (
        select get_all_privileges_for_user_varchar::jsonb->'requestTypeToSolve' ? request_type as has_access
        from get_all_privileges_for_user_varchar(user_name) )
    else(
    select case
        when  tbl_ticket_types.name = 'User' or tbl_ticket_types.name = 'Other' then (
            select  get_all_privileges_for_user_varchar::jsonb->>'ticketTypeToSolve'
                        like concat('%',tbl_ticket_types.name,'%')  from get_all_privileges_for_user_varchar(user_name))
        else (select  get_all_privileges_for_user_varchar::jsonb->>'ticketTypeToSolve'
                          like concat('%',t_application_name,'%') from get_all_privileges_for_user_varchar(user_name))
        end as has_access
    from tbl_tickets
      left join tbl_ticket_types on tbl_ticket_types.id = tbl_tickets.t_type_id
    where request_id = searching_request_id
    ) end as has_access;
$$ LANGUAGE sql;




-- select usernames who wil recaive request change through websockets
drop function if exists get_users_to_send_request_change(integer);
CREATE FUNCTION get_users_to_send_request_change(searching_request_id integer)
    RETURNS TABLE(username varchar)  AS
$$
select distinct username from (
      -- creator
      select user1.username
      from ( select * from tbl_requests where tbl_requests.id = searching_request_id) as request
               inner join tbl_users user1 on user1.id = request.creator_uid

      union
      -- assaigned
      select user2.username
      from ( select * from tbl_requests where tbl_requests.id = searching_request_id) as request
               left join tbl_users user2 on user2.id = request.assigned_uid

      union
      -- privileged users
      select user4.username
      from tbl_users user4
               cross join  ( select tbl_requests.id , tbl_module_type.name from tbl_requests
                            inner join tbl_module_type on tbl_module_type.id = tbl_requests.type_id
                             where tbl_requests.id = searching_request_id) as request
      where get_access_for_request( request.id , request.name , user4.username) is true

      union
      -- select manager of creator or assaigned
      select user5.username from tbl_users user5
                                     inner join tbl_groups on tbl_groups.manager_id = user5.id
      where tbl_groups.id in (
          select tg1.group_id from tbl_user_groups tg1
          where tg1.user_id in (
              select t1.creator_uid from tbl_requests t1 where t1.id = searching_request_id
              union
              select t2.assigned_uid from tbl_requests t2 where t2.id = searching_request_id
          )
      )

      union
      -- select  watched group of creator or assaigned
      select distinct user6.username
      from tbl_group_activity_watched_by_user watched
      inner join tbl_users user6 on user6.id = watched.user_id
      where watched.group_id in (
          select tg1.group_id from tbl_user_groups tg1
          where tg1.user_id in (
              select t1.creator_uid from tbl_requests t1 where t1.id = searching_request_id
              union
              select t2.assigned_uid from tbl_requests t2 where t2.id = searching_request_id
          )
      )
  ) as t where username is not null
$$ LANGUAGE sql;
