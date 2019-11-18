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

DROP TABLE IF EXISTS tbl_document_to_requests CASCADE;
create table tbl_document_to_requests(
 id serial primary key,
 document_id Integer not null,
 request_id Integer not null
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
  username varchar(10) unique NOT NULL,
  password varchar(20) NOT NULL,
  first_name varchar(20) NOT NULL,
  last_name varchar(20) NOT NULL,
  foto varchar NOT NULL default 'user.png',
  email varchar unique NOT NULL,
  active boolean default True,
  timestamp_creation TIMESTAMP default current_timestamp,
  timestamp_ending TIMESTAMP default NULL,
  is_admin boolean not null default False
);
/*DROP TABLE IF EXISTS tbl_request_changed_solver CASCADE;
create table tbl_request_changed_solver(
   id serial primary key,
   request_id Integer NOT NULL,
   user_id_from Integer NOT NULL,
   user_id_to Integer NOT NULL,
   timestamp TIMESTAMP default current_timestamp
);*/
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
   solved_uid Integer,
   closed_uid Integer,
   subject varchar NOT NULL,
   solution varchar,
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
  r_deadline TIMESTAMP,
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
DROP TABLE IF EXISTS tbl_report_access_stored CASCADE;
create table tbl_report_access_stored(
   id serial primary key,
   report_id Integer NOT NULL,
   access_id Integer NOT NULL,
   path varchar(512) NOT NULL
);
DROP TABLE IF EXISTS tbl_report_access CASCADE;
create table tbl_report_access(
  id serial primary key,
  name varchar NOT NULL
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
  task_type_id integer not null,
  name varchar not null ,
  sequence serial,
  active boolean default True
);
DROP TABLE IF EXISTS tbl_servers CASCADE;
create table tbl_servers(
  id serial primary key,
  task_type_id integer not null,
  name varchar  not null ,
  sequence serial,
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
 name varchar(255) NOT NULL,
 sequence serial NOT NULL,
 active boolean default True
);
DROP TABLE IF EXISTS tbl_softwares CASCADE;
create table tbl_softwares(
  id serial primary key,
  task_type_id integer not null,
  name varchar(255) NOT NULL,
  sequence serial NOT NULL,
  active boolean default True
);

DROP TABLE IF EXISTS tbl_ticket_privileges CASCADE;
create table tbl_ticket_privileges(
   id serial primary key,
   group_id integer not null,
   task_type_id integer not null,
   application_name varchar(255),
   unique(group_id , task_type_id , application_name)
);


DROP TABLE IF EXISTS tbl_request_types CASCADE;
create table tbl_request_types(
  id serial primary key,
  name varchar(255) NOT NULL unique,
  active boolean default True
);


DROP TABLE IF EXISTS tbl_groups CASCADE;
create table tbl_groups(
  id serial primary key,
  name varchar(255) NOT NULL unique,
  email varchar(255) unique,
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
create table tbl_request_type_to_solve(
   id serial primary key,
   group_id int ,
   request_type_id int
);

DROP TABLE IF EXISTS tbl_request_type_to_submit CASCADE;
create table tbl_request_type_to_submit(
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
  name varchar(500) not null
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
  group_id int not null
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
  request_id integer not null,
  user_id integer not null,
  log varchar not null,
  timestamp TIMESTAMP default current_timestamp
);

ALTER TABLE tbl_request_logs ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_request_logs ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);

ALTER TABLE tbl_group_activity_watched_by_user ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_group_activity_watched_by_user ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);

ALTER TABLE tbl_reminders  ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_reminder_comments ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_reminder_comments ADD FOREIGN KEY (reminder_id) REFERENCES tbl_reminders(id);

ALTER TABLE tbl_shared_reminders ADD FOREIGN KEY (reminder_id) REFERENCES tbl_reminders(id);
ALTER TABLE tbl_shared_reminders ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_document_to_users ADD FOREIGN KEY (document_id) REFERENCES tbl_documents(id);
ALTER TABLE tbl_document_to_users ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);

--ALTER TABLE tbl_request_changed_solver ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);
--ALTER TABLE tbl_request_changed_solver ADD FOREIGN KEY (user_id_from) REFERENCES tbl_users(id);
--ALTER TABLE tbl_request_changed_solver ADD FOREIGN KEY (user_id_to) REFERENCES tbl_users(id);

ALTER TABLE tbl_request_comments ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);
ALTER TABLE tbl_request_comments ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_report_access_stored ADD FOREIGN KEY (report_id) REFERENCES tbl_reports(id);
ALTER TABLE tbl_report_access_stored ADD FOREIGN KEY (access_id) REFERENCES tbl_report_access(id);

ALTER TABLE tbl_reports ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);
ALTER TABLE tbl_reports ADD FOREIGN KEY (r_refresh_id) REFERENCES tbl_report_refreshes(id);
ALTER TABLE tbl_reports ADD FOREIGN KEY (r_type_id) REFERENCES tbl_report_types(id);

ALTER TABLE tbl_requests ADD FOREIGN KEY (priority_id) REFERENCES tbl_request_priorities(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (creator_uid) REFERENCES tbl_users(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (assigned_uid) REFERENCES tbl_users(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (solved_uid) REFERENCES tbl_users(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (closed_uid) REFERENCES tbl_users(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (position_id) REFERENCES tbl_request_positions(id);
ALTER TABLE tbl_requests ADD FOREIGN KEY (type_id) REFERENCES tbl_request_types(id);

ALTER TABLE tbl_request_watched_by_user ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_request_watched_by_user ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);

ALTER TABLE tbl_working_days ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_working_days ADD FOREIGN KEY (working_day_type_id) REFERENCES tbl_working_day_types(id);


ALTER TABLE tbl_user_groups ADD FOREIGN KEY (user_id) REFERENCES tbl_users(id);
ALTER TABLE tbl_user_groups ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);

ALTER TABLE tbl_ticket_privileges ADD FOREIGN KEY (task_type_id) REFERENCES tbl_ticket_types(id);
ALTER TABLE tbl_ticket_privileges ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);

ALTER TABLE tbl_tickets ADD FOREIGN KEY (request_id) REFERENCES tbl_requests(id);
ALTER TABLE tbl_tickets ADD FOREIGN KEY (t_type_id) REFERENCES tbl_ticket_types(id);

ALTER TABLE tbl_server_contacts ADD FOREIGN KEY (server_id) REFERENCES tbl_servers(id);

ALTER TABLE tbl_servers ADD FOREIGN KEY (task_type_id) REFERENCES tbl_ticket_types(id);
ALTER TABLE tbl_softwares ADD FOREIGN KEY (task_type_id) REFERENCES tbl_ticket_types(id);
ALTER TABLE tbl_hardwares ADD FOREIGN KEY (task_type_id) REFERENCES tbl_ticket_types(id);

ALTER TABLE tbl_groups add  FOREIGN KEY (manager_id) REFERENCES tbl_users(id);

ALTER TABLE tbl_request_type_to_solve ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);
ALTER TABLE tbl_request_type_to_solve ADD FOREIGN KEY (request_type_id) REFERENCES tbl_request_types(id);

ALTER TABLE tbl_request_type_to_submit ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);
ALTER TABLE tbl_request_type_to_submit ADD FOREIGN KEY (request_type_id) REFERENCES tbl_request_types(id);

ALTER TABLE tbl_request_comments_shared ADD FOREIGN KEY (group_id) REFERENCES tbl_groups(id);
ALTER TABLE tbl_request_comments_shared ADD FOREIGN KEY (request_comment_id) REFERENCES tbl_request_comments(id);

alter table tbl_document_to_requests add foreign key(document_id) references tbl_documents(id);
alter table tbl_document_to_requests add foreign key(request_id) references tbl_requests(id);

alter table tbl_finance_type_privileges add foreign key(finance_type_id) references tbl_finance_types(id);
alter table tbl_finance_type_privileges add foreign key(group_id) references tbl_groups(id);

alter table tbl_finances add foreign key(request_id) references tbl_requests(id);
alter table tbl_finances add foreign key(finance_type_id) references tbl_finance_types(id);


create table hibernate_sequences (sequence_name varchar(255) not null, next_val int8, primary key (sequence_name));
insert into hibernate_sequences(sequence_name, next_val) values ('default',0);