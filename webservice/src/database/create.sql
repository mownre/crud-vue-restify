drop database if exists cadastro;
create database cadastro;

use cadastro;

drop table if exists pessoas;

create table pessoas(
	id int unsigned not null auto_increment,
	nome varchar(255) not null,
  idade int,
	cpf varchar(14) not null unique,
	rg varchar(11) unique,
	sexo varchar(255),
  primary key(id)
);

insert into pessoas(nome, idade, cpf, rg, sexo) values ('Pedro Maure', 18,'018.422.884-54', '003.777.031', 'Masculino');
insert into pessoas(nome, idade, cpf, rg, sexo) values ('Meliisa Maria', 09, '123.456.789-99', '003.123.321', 'Feminino');
insert into pessoas(nome, idade, cpf, rg, sexo) values ('Paulo Mairo', 16,'028.123.884-54', '003.143.031', 'Masculino');
insert into pessoas(nome, idade, cpf, rg, sexo) values ('Joseane Lima', 19,'700.785.094-40', '003.143.531', 'Feminino');
insert into pessoas(nome, idade, cpf, rg, sexo) values ('Ana Paula', 41,'078.163.854-54', '033.133.021', 'Feminino');