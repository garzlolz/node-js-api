var express=require('express');
var app=express();
 var sql=require('mssql');

//config for your database
 var config={
    user:'sa',
    password:'1213',
    server:'localhost\\SQLEXPRESS',   //這邊要注意一下!!
    database:'FCGoDB',
    options: {
        encrypt: true,
        trustServerCertificate: true
      }
 }

 module.exports = config;