drop database if exists employeedb;
create database employeedb;

use employeedb;

create table employee(
    employeeId integer not null primary key,
    firstname varchar(20) not null,
    lastname varchar(30) not null,
    department varchar(15) not null,
    salary decimal(6,2) not null
);

insert into employee values(1,'Matt','River','ict',3000);
insert into employee values(2, 'Mary', 'Smith','admin',7000);

drop user if exists 'mockuser'@'localhost';
create user 'mockuser'@'localhost' identified by 'secret';

grant all privileges on employeedb.* to 'mockuser'@'localhost';