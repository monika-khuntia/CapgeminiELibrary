create table Users(
	Id int primary key identity (1,1),
	FirstName varchar(20),
	LastName varchar(20),
	Email varchar(50),
	MobileNumber varchar(15),
	Password varchar(20)
)

select * from Users

