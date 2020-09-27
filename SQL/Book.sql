drop table Book
create table Book(
	Id int primary key identity(1,1),
	BookName varchar(50)
)
select * from Book
insert into Book values('Book 1')
insert into Book values('Book 2')
select * from Book

