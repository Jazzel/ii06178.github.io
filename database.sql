CREATE TABLE Event (
  idEvent INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  EventName VARCHAR(255) NULL,
  Budget INTEGER UNSIGNED NULL,
  PRIMARY KEY(idEvent)
);

CREATE TABLE Guest (
  idGuest INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  GuestName VARCHAR(255) NULL,
  CNIC INTEGER UNSIGNED NULL,
  PhoneNumber VARCHAR NULL,
  Password_2 VARCHAR NULL,
  PRIMARY KEY(idGuest)
);

CREATE TABLE Guest_has_Event (
  Guest_idGuest INTEGER UNSIGNED NOT NULL,
  Event_idEvent INTEGER UNSIGNED NOT NULL,
  Role_idRole INTEGER UNSIGNED NOT NULL,
  Attendence BOOL NULL,
  Ticketbought BOOL NULL,
  PRIMARY KEY(Guest_idGuest, Event_idEvent),
  INDEX Guest_has_Event_FKIndex1(Guest_idGuest),
  INDEX Guest_has_Event_FKIndex2(Event_idEvent),
  INDEX Guest_has_Event_FKIndex3(Role_idRole)
);

CREATE TABLE Role (
  idRole INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  RoleName VARCHAR(255) NULL,
  PRIMARY KEY(idRole)
);

CREATE TABLE Schedule (
  idSchedule INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Semester_idSemester INTEGER UNSIGNED NOT NULL,
  Event_idEvent INTEGER UNSIGNED NOT NULL,
  TimeStart DATETIME NULL,
  TimeEnd DATETIME NULL,
  PRIMARY KEY(idSchedule),
  INDEX Schedule_FKIndex2(Event_idEvent),
  INDEX Schedule_FKIndex2(Semester_idSemester)
);

CREATE TABLE Semester (
  idSemester INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Season VARCHAR(255) NULL,
  SessionYear YEAR NULL,
  PRIMARY KEY(idSemester)
);

CREATE TABLE Students (
  idStudents INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  StudentName VARCHAR(255) NULL,
  Batch YEAR NULL,
  Phone-Number VARCHAR(255) NULL,
  Pass_word VARCHAR(255) NULL,
  Exec VARCHAR(255) NULL,
  PRIMARY KEY(idStudents)
);

CREATE TABLE Students_has_Event (
  Students_idStudents INTEGER UNSIGNED NOT NULL,
  Event_idEvent INTEGER UNSIGNED NOT NULL,
  Role_idRole INTEGER UNSIGNED NOT NULL,
  Attendence BOOL NULL,
  TicketBought BOOL NULL,
  PRIMARY KEY(Students_idStudents, Event_idEvent),
  INDEX Students_has_Event_FKIndex1(Students_idStudents),
  INDEX Students_has_Event_FKIndex2(Event_idEvent),
  INDEX Students_has_Event_FKIndex3(Role_idRole)
);

CREATE TABLE Students_has_Semester (
  Students_idStudents INTEGER UNSIGNED NOT NULL,
  Semester_idSemester INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(Students_idStudents, Semester_idSemester),
  INDEX Students_has_Semester_FKIndex1(Students_idStudents),
  INDEX Students_has_Semester_FKIndex2(Semester_idSemester)
);

CREATE TABLE Venue (
  idVenue INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Schedule_idSchedule INTEGER UNSIGNED NOT NULL,
  Venue Name VARCHAR(255) NULL,
  PRIMARY KEY(idVenue),
  INDEX Venue_FKIndex1(Schedule_idSchedule)
);


