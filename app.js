const Discord = require('discord.js');
	const client = new Discord.Client();
	const settings = require('./settings.json');


	const fs = require('fs');
	const icy=require('icy');




const p= settings.prefix
const ytdl = require('ytdl-core');




const musicStatus=false
var dispatcher
var counter=0;


var queue=[]
	 client.on('message',message=>{
		 let guild=message.guild
let args=message.content.split(" ")


//check for music request
if(message.author!=client.user){


switch(args[0]){


case "!summon":

if(message.member.voiceChannel){





if(!message.member.voiceChannel.permissionsFor(message.client.user).has('CONNECT')){



		message.channel.send("I do not have sufficient **permissions** to join this **channel**")


}



else{


	message.member.voiceChannel.join()


}



}else if(!message.member.voiceChannel){


	message.reply("**Enter a voice channel**")
}else{



}




break;

case "~play":

if(guild.voiceConnection){

if(queue.length==0){

queue.push(args[1])



	play()




}else{
	queue.push(args[1])
}


}else{


	message.reply("**Summon me First**")
}

break;

case "~stop":


if(guild.me.voiceChannel){

guild.me.voiceChannel.leave()


}else{

message.reply("**I'm not in a channel.** ")

}




break;



}





}




function play(){



dispatcher= guild.voiceConnection.playStream(ytdl(queue[0],{filter:'audioonly'}))
.on('end',()=>{


queue.shift()

if(queue.length==0){

	message.guild.me.voiceChannel.leave()
dispatcher=null;
}else{


play()


}




})


}


	}













	 )
client.login(settings.token)
