import requests
import random
from flask import Flask
# https://discord.com/api/v9/channels/1090966233911935018/messages
words = ["dumbass","mimemamomu","nocap","ahh~","anryisdum","vodkakaya","dolia","varamskaia"]
payload = {
    'content': random.choice(words)
}
header = {
    'authorization': 'ODc0NTY4MjE4NTk1OTYyOTUw.GGfQUM.U8lFtvQMdyH16DHNNI_fWJYImZtGyClBIMJEz0'
}



r = requests.post("https://discord.com/api/v9/channels/1090966233911935018/messages",data=payload,headers=header)
