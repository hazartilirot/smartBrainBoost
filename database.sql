drop database if exists "smart-brain";

create database "smart-brain";

drop table if exists users;

create table users (
    id serial primary key,
    name varchar(100) not null,
    email text unique not null,
    entries bigint default 0,
    joined timestamp not null
);

drop table if exists login;

create table login (
    id serial primary key,
    hash varchar(100) not null,
    email text unique not null
);