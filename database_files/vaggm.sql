create user 'vaggm'@'%' identified by 'pass';
grant all privileges on *.* to 'vaggm'@'%' with grant option;
flush privileges;