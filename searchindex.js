Search.setIndex({docnames:["avatar2","avatar2.archs","avatar2.peripherals","avatar2.plugins","avatar2.protocols","avatar2.targets","index","modules"],envversion:51,filenames:["avatar2.rst","avatar2.archs.rst","avatar2.peripherals.rst","avatar2.plugins.rst","avatar2.protocols.rst","avatar2.targets.rst","index.rst","modules.rst"],objects:{"":{avatar2:[0,0,0,"-"]},"avatar2.archs":{arm:[1,0,0,"-"],x86:[1,0,0,"-"]},"avatar2.archs.arm":{ARM:[1,1,1,""],ARMBE:[1,1,1,""]},"avatar2.archs.arm.ARM":{capstone_arch:[1,2,1,""],capstone_mode:[1,2,1,""],qemu_name:[1,2,1,""],registers:[1,2,1,""],unemulated_instructions:[1,2,1,""]},"avatar2.archs.arm.ARMBE":{capstone_mode:[1,2,1,""],qemu_name:[1,2,1,""]},"avatar2.archs.x86":{X86:[1,1,1,""],X86_64:[1,1,1,""]},"avatar2.archs.x86.X86":{capstone_arch:[1,2,1,""],capstone_mode:[1,2,1,""],qemu_name:[1,2,1,""],registers:[1,2,1,""],unemulated_instructions:[1,2,1,""]},"avatar2.archs.x86.X86_64":{qemu_name:[1,2,1,""],registers:[1,2,1,""],unemulated_instructions:[1,2,1,""]},"avatar2.avatar2":{Avatar:[0,1,1,""]},"avatar2.avatar2.Avatar":{add_memory_range:[0,3,1,""],add_target:[0,3,1,""],get_memory_range:[0,3,1,""],get_status:[0,3,1,""],get_target:[0,3,1,""],get_targets:[0,3,1,""],init_targets:[0,3,1,""],load_plugin:[0,3,1,""],run:[0,3,1,""],shutdown:[0,3,1,""],sigint_wrapper:[0,3,1,""],stop:[0,3,1,""],transfer_state:[0,3,1,""]},"avatar2.memory_range":{MemoryRange:[0,1,1,""]},"avatar2.message":{AvatarMessage:[0,1,1,""],BreakpointHitMessage:[0,1,1,""],RemoteMemoryReadMessage:[0,1,1,""],RemoteMemoryWriteMessage:[0,1,1,""],UpdateStateMessage:[0,1,1,""]},"avatar2.peripherals":{avatar_peripheral:[2,0,0,"-"],nucleo_usart:[2,0,0,"-"]},"avatar2.peripherals.avatar_peripheral":{AvatarPeripheral:[2,1,1,""]},"avatar2.peripherals.avatar_peripheral.AvatarPeripheral":{read_memory:[2,3,1,""],shutdown:[2,3,1,""],write_memory:[2,3,1,""]},"avatar2.peripherals.nucleo_usart":{NucleoRTC:[2,1,1,""],NucleoTIM:[2,1,1,""],NucleoUSART:[2,1,1,""]},"avatar2.peripherals.nucleo_usart.NucleoRTC":{nop_read:[2,3,1,""]},"avatar2.peripherals.nucleo_usart.NucleoTIM":{nop_read:[2,3,1,""],nop_write:[2,3,1,""]},"avatar2.peripherals.nucleo_usart.NucleoUSART":{nop_read:[2,3,1,""],nop_write:[2,3,1,""],read_data_register:[2,3,1,""],read_status_register:[2,3,1,""],run:[2,3,1,""],shutdown:[2,3,1,""],write_data_register:[2,3,1,""]},"avatar2.plugins":{instruction_forwarder:[3,0,0,"-"],orchestrator:[3,0,0,"-"]},"avatar2.plugins.instruction_forwarder":{forward_instructions:[3,4,1,""],load_plugin:[3,4,1,""]},"avatar2.plugins.orchestrator":{OrchestrationStopReason:[3,1,1,""],Transition:[3,1,1,""],add_transition:[3,4,1,""],disable_transitions:[3,4,1,""],enable_transitions:[3,4,1,""],load_plugin:[3,4,1,""],resume_orchestration:[3,4,1,""],start_orchestration:[3,4,1,""],stop_orchestration:[3,4,1,""],transition_callback:[3,4,1,""],update_state_callback:[3,4,1,""]},"avatar2.plugins.orchestrator.OrchestrationStopReason":{STOPPING_TRANSITION_HIT:[3,2,1,""],TARGET_EXITED:[3,2,1,""],UNKNOWN_BREAKPOINT_HIT:[3,2,1,""],USER_REQUESTED:[3,2,1,""]},"avatar2.protocols":{gdb:[4,0,0,"-"],openocd:[4,0,0,"-"],qmp:[4,0,0,"-"],remote_memory:[4,0,0,"-"]},"avatar2.protocols.gdb":{GDBProtocol:[4,1,1,""],GDBResponseListener:[4,1,1,""]},"avatar2.protocols.gdb.GDBProtocol":{cont:[4,3,1,""],get_register_names:[4,3,1,""],read_memory:[4,3,1,""],read_register:[4,3,1,""],read_register_from_nr:[4,3,1,""],remote_connect:[4,3,1,""],remote_connect_serial:[4,3,1,""],remote_disconnect:[4,3,1,""],remove_breakpoint:[4,3,1,""],set_breakpoint:[4,3,1,""],set_endianness:[4,3,1,""],set_watchpoint:[4,3,1,""],shutdown:[4,3,1,""],step:[4,3,1,""],stop:[4,3,1,""],write_memory:[4,3,1,""],write_register:[4,3,1,""]},"avatar2.protocols.gdb.GDBResponseListener":{get_async_response:[4,3,1,""],get_sync_response:[4,3,1,""],get_token:[4,3,1,""],parse_async_notify:[4,3,1,""],parse_async_response:[4,3,1,""],run:[4,3,1,""],stop:[4,3,1,""]},"avatar2.protocols.openocd":{OpenOCDProtocol:[4,1,1,""]},"avatar2.protocols.openocd.OpenOCDProtocol":{connect:[4,3,1,""],reset:[4,3,1,""],shutdown:[4,3,1,""]},"avatar2.protocols.qmp":{QMPProtocol:[4,1,1,""],QMPResponseListener:[4,1,1,""]},"avatar2.protocols.qmp.QMPProtocol":{connect:[4,3,1,""],execute_command:[4,3,1,""],get_registers:[4,3,1,""],reset:[4,3,1,""],shutdown:[4,3,1,""]},"avatar2.protocols.qmp.QMPResponseListener":{run:[4,3,1,""],stop:[4,3,1,""]},"avatar2.protocols.remote_memory":{RemoteMemoryProtocol:[4,1,1,""],RemoteMemoryReq:[4,1,1,""],RemoteMemoryRequestListener:[4,1,1,""],RemoteMemoryResp:[4,1,1,""],operation:[4,1,1,""]},"avatar2.protocols.remote_memory.RemoteMemoryProtocol":{connect:[4,3,1,""],sendResponse:[4,3,1,""],shutdown:[4,3,1,""]},"avatar2.protocols.remote_memory.RemoteMemoryReq":{address:[4,2,1,""],id:[4,2,1,""],operation:[4,2,1,""],size:[4,2,1,""],value:[4,2,1,""]},"avatar2.protocols.remote_memory.RemoteMemoryRequestListener":{run:[4,3,1,""],stop:[4,3,1,""]},"avatar2.protocols.remote_memory.RemoteMemoryResp":{id:[4,2,1,""],success:[4,2,1,""],value:[4,2,1,""]},"avatar2.protocols.remote_memory.operation":{READ:[4,2,1,""],WRITE:[4,2,1,""]},"avatar2.targets":{dummy_target:[5,0,0,"-"],gdb_target:[5,0,0,"-"],openocd_target:[5,0,0,"-"],panda_target:[5,0,0,"-"],qemu_target:[5,0,0,"-"],target:[5,0,0,"-"]},"avatar2.targets.dummy_target":{DummyTarget:[5,1,1,""]},"avatar2.targets.dummy_target.DummyTarget":{cont:[5,3,1,""],get_status:[5,3,1,""],init:[5,3,1,""],read_memory:[5,3,1,""],remove_breakpoint:[5,3,1,""],sendResponse:[5,3,1,""],set_breakpoint:[5,3,1,""],shutdown:[5,3,1,""],stop:[5,3,1,""],write_memory:[5,3,1,""]},"avatar2.targets.gdb_target":{GDBTarget:[5,1,1,""]},"avatar2.targets.gdb_target.GDBTarget":{init:[5,3,1,""]},"avatar2.targets.openocd_target":{OpenOCDTarget:[5,1,1,""]},"avatar2.targets.openocd_target.OpenOCDTarget":{init:[5,3,1,""]},"avatar2.targets.panda_target":{PandaTarget:[5,1,1,""]},"avatar2.targets.panda_target.PandaTarget":{begin_record:[5,3,1,""],begin_replay:[5,3,1,""],end_record:[5,3,1,""],end_replay:[5,3,1,""],init:[5,3,1,""],list_plugins:[5,3,1,""],load_plugin:[5,3,1,""],unload_plugin:[5,3,1,""]},"avatar2.targets.qemu_target":{QemuTarget:[5,1,1,""]},"avatar2.targets.qemu_target.QemuTarget":{QEMU_CONFIG_FILE:[5,2,1,""],assemble_cmd_line:[5,3,1,""],generate_configuration:[5,3,1,""],init:[5,3,1,""],shutdown:[5,3,1,""]},"avatar2.targets.target":{Target:[5,1,1,""],TargetStates:[5,1,1,""],action_valid_decorator_factory:[5,4,1,""]},"avatar2.targets.target.Target":{cont:[5,3,1,""],get_status:[5,3,1,""],init:[5,3,1,""],read_memory:[5,3,1,""],read_register:[5,3,1,""],remove_breakpoint:[5,3,1,""],rm:[5,3,1,""],rr:[5,3,1,""],set_breakpoint:[5,3,1,""],set_watchpoint:[5,3,1,""],shutdown:[5,3,1,""],step:[5,3,1,""],stop:[5,3,1,""],update_state:[5,3,1,""],wait:[5,3,1,""],wm:[5,3,1,""],wr:[5,3,1,""],write_memory:[5,3,1,""],write_register:[5,3,1,""]},"avatar2.targets.target.TargetStates":{CREATED:[5,2,1,""],EXITED:[5,2,1,""],INITIALIZED:[5,2,1,""],RUNNING:[5,2,1,""],STOPPED:[5,2,1,""],SYNCHING:[5,2,1,""]},"avatar2.watchmen":{WatchedEvent:[0,1,1,""],Watchmen:[0,1,1,""],asyncReaction:[0,1,1,""],watch:[0,4,1,""]},"avatar2.watchmen.WatchedEvent":{react:[0,3,1,""]},"avatar2.watchmen.Watchmen":{add:[0,3,1,""],add_watch_types:[0,3,1,""],add_watchman:[0,3,1,""],remove_watchman:[0,3,1,""],t:[0,3,1,""],trigger:[0,3,1,""]},"avatar2.watchmen.asyncReaction":{run:[0,3,1,""]},avatar2:{archs:[1,0,0,"-"],avatar2:[0,0,0,"-"],memory_range:[0,0,0,"-"],message:[0,0,0,"-"],peripherals:[2,0,0,"-"],plugins:[3,0,0,"-"],protocols:[4,0,0,"-"],targets:[5,0,0,"-"],watchmen:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"byte":4,"case":[2,5],"class":[0,1,2,3,4,5],"default":[0,4,5],"enum":[3,4,5],"function":[4,5],"int":[4,5],"new":0,"return":[0,4,5],"true":[0,3,4,5],"while":[4,5],The:[0,4,5],Useful:4,_async_handl:0,_ctype:4,about:5,absolut:5,access:4,accord:4,action:5,action_valid_decorator_factori:5,actual:5,add:0,add_memory_rang:0,add_target:0,add_transit:3,add_watch_typ:0,add_watchman:0,added:[4,5],addit:4,additional_arg:[4,5],addr:5,address:[0,2,3,4,5],all:[0,4,5],also:4,although:4,amount:[4,5],analys:[0,5],anoth:0,applic:0,arch:[0,4,7],architectur:[0,4],arg:[0,4,5],argument:[0,4,5],arm:[0,4,7],armb:1,armeb:1,aseper:5,assemble_cmd_lin:5,async:[0,4],async_message_handl:4,asynchron:[0,4],asyncreact:0,automat:[4,6],avatar2:6,avatar:[0,2,3,4,5],avatar_peripher:[0,7],avatar_queu:4,avatarmessag:[0,4],avatarperipher:2,back:0,backend:0,base:[0,1,2,3,4,5],baud_rat:4,befor:0,begin_record:5,begin_replai:5,behavior:0,bkpt:4,bkptno:5,block:3,bool:[0,4,5],breakpoint:[4,5],breakpoint_numb:0,breakpointhitmessag:0,call:[0,4],callback:0,can:[0,4,5],capstone_arch:1,capstone_mod:1,captur:5,cleanli:0,cmd:4,code:0,comma:5,command:4,commun:4,comparison:4,concept:5,condit:[4,5],conf:5,configur:5,connect:[4,5],constant:0,cont:[4,5],contain:6,content:[6,7],continu:[4,5],convert:4,core:5,cpsr:1,cpu_model:5,creat:[0,4,5],current:[4,5],decor:[0,5],defin:0,delet:[4,5],deliv:4,depend:4,desir:0,destin:0,dev:[4,5],devic:[4,5],dict:[0,5],dictionari:4,dictonari:4,differ:[0,5],direct:4,disabl:0,disable_transit:3,disconnect:4,dispatch:4,down:[0,4],dummi:5,dummy_target:[0,7],dummytarget:5,easier:4,eax:1,ebp:1,ebx:1,ecx:1,edi:1,edx:1,eflag:1,eip:1,either:4,els:[4,5],emit:4,emul:0,enabl:[0,3],enable_transit:3,end:0,end_record:5,end_replai:5,endian:[0,4],entri:5,entry_address:5,enumer:[3,4],esi:1,esp:1,execut:[4,5],execute_command:4,exit:[0,2,5],expos:4,factori:5,fals:[0,3,4,5],fetch:4,file:[0,4,5],file_nam:5,firmwar:5,force_init:3,forward:[0,5],forward_instruct:3,forwarded_to:0,frame:0,from:[0,4,5],from_target:[0,3],gdb:[0,5,7],gdb_additional_arg:5,gdb_control:4,gdb_execut:[4,5],gdb_port:[4,5],gdb_protocol:4,gdb_serial_baud_r:5,gdb_serial_devic:5,gdb_serial_par:5,gdb_target:[0,7],gdbprotocol:4,gdbresponselisten:4,gdbtarget:5,gener:[0,5,6],generate_configur:5,get:[0,4],get_async_respons:4,get_memory_rang:0,get_regist:4,get_register_nam:4,get_statu:[0,5],get_sync_respons:4,get_target:0,get_token:4,hardwar:[4,5],has:5,here:0,hmp:4,hold:0,hw_bkpt:3,hw_breakpoint:3,i386:1,ignor:[4,5],ignore_count:[4,5],implement:[0,4,5],index:6,info:4,inform:5,init:[0,5],init_target:0,initi:5,insert:[4,5],insight:5,instruct:[3,4,5],instruction_forward:[0,7],integ:4,interfac:[0,4],itself:[0,4],ivar:[0,4],json:5,just:0,known:4,kwarg:[0,2,3,5],laod:5,lift:4,likewis:4,line:[4,5],link:4,list:[0,4,5],list_plugin:5,listen:4,littl:[0,4],load:[0,5],load_plugin:[0,3,5],localhost:4,machin:5,main:[0,4],manag:0,manner:4,map:0,match:[4,5],max_hit:3,mcr:1,member:4,memori:[0,4,5],memory_rang:7,memory_region:3,memoryforward:4,memoryrang:0,messag:[3,4,7],method:[0,2],mode:[4,5],modul:[6,7],monitor:4,more:0,mrc:1,multipl:[0,4],must:5,name:[0,2,4,5],new_stat:0,none:[0,3,4,5],nop_read:2,nop_writ:2,note:0,notifi:4,now:0,nucleo_usart:[0,7],nucleo_usart_port:2,nucleortc:2,nucleotim:2,nucleousart:2,num_word:[4,5],number:4,object:[0,1,2,3,4,5],one:[0,4,5],ongo:5,onli:4,openocd:[0,5,7],openocd_execut:4,openocd_script:[4,5],openocd_target:[0,7],openocdprotocol:4,openocdtarget:5,oper:4,orchestr:[0,5,7],orchestrationstopreason:3,order:[0,4],origin:[0,4],other:4,output_directori:[0,4],over:5,overwritten:2,packag:[6,7],page:6,panda:5,panda_plugin:5,panda_target:[0,7],pandatarget:5,paramet:[0,4,5],pariti:4,pars:[0,4],parse_async_notifi:4,parse_async_respons:4,pass:[0,5],path:[4,5],peripher:[0,7],permis:0,permiss:0,place:6,plugin:[0,5,7],plugin_arg:5,plugin_nam:5,port:4,power:4,present:5,prioriti:0,process:[0,4,5],protocol:[0,5,7],provid:[0,5],purpos:5,put:4,pygdbmi:4,qemu:[0,5],qemu_config_fil:5,qemu_nam:1,qemu_target:[0,7],qemutarget:5,qmp:[0,7],qmp_port:5,qmpprotocol:4,qmpresponselisten:4,queue:[0,4],r10:1,r11:1,r12:1,r13:1,r14:1,r15:1,randomli:5,rang:[0,5],raw:[4,5],rax:1,rbp:1,rbx:1,rcx:1,rdi:1,rdx:1,react:0,read:[4,5],read_data_regist:2,read_from_fil:3,read_memori:[2,4,5],read_regist:[4,5],read_register_from_nr:4,read_status_regist:2,reason:3,receiv:[0,4],record:5,record_nam:5,refer:4,reg:4,reg_num:4,regex:[4,5],regist:[0,1,4,5],remot:4,remote_connect:4,remote_connect_seri:4,remote_disconnect:4,remote_memori:[0,7],remotememoryprotocol:4,remotememoryreadmessag:0,remotememoryreq:4,remotememoryrequestlisten:4,remotememoryresp:4,remotememorywritemessag:0,remove_breakpoint:[4,5],remove_watchman:0,replai:5,replay_nam:5,repres:[0,4],request:[4,5],requir:[2,5],reset:4,respons:4,resume_orchestr:3,retriev:0,rip:1,rsi:1,rsp:1,run:[0,2,4,5],rwx:0,rx_queue:4,rx_queue_nam:4,same:0,script:[0,4],search:6,self:3,send:4,sendrespons:[4,5],serial:[4,5],serv:4,server:4,set:[0,4,5],set_breakpoint:[4,5],set_endian:4,set_watchpoint:[4,5],share:5,should:[0,2,4,5],shut:[0,4],shutdown:[0,2,4,5],sigint_wrapp:0,signal:0,simpl:5,simul:5,sinc:4,singl:4,sink:4,size:[0,2,4,5],some:2,sourc:0,spawn:[0,5],specifi:[0,4,5],start:5,start_orchestr:3,state:[0,4,5],step:[4,5],stop:[0,3,4,5],stop_orchestr:3,stopping_transition_hit:3,str:[4,5],structur:4,submodul:7,subpackag:7,subsequ:4,success:[4,5],synch:[0,5],synch_reg:[0,3],synched_rang:[0,3],synchron:4,system:[0,5],target:[0,4,7],target_exit:3,targetobject:0,targetst:5,teardown:4,telnet:4,telnet_port:[4,5],temporari:[4,5],tempori:[4,5],test:5,textual:0,them:4,thi:[0,2,4,5,6],those:[0,2],thread:[0,2,4,5],threadno:[4,5],through:4,time:[4,5],timeout:4,tmp:4,to_target:[0,3],todo:4,token:4,transfer:0,transfer_st:0,transit:3,transition_callback:3,trigger:[0,5],ttyacm0:[4,5],tx_queue_nam:4,type:0,unemulated_instruct:1,union:4,unix:0,unknown_breakpoint_hit:3,unload:5,unload_plugin:5,unprocess:[4,5],update_st:5,update_state_callback:3,updatestatemessag:0,used:[0,4,5],useful:5,user:0,user_request:3,util:4,val:[4,5],valu:[0,2,4,5],variabl:[0,4,5],veri:4,verifi:5,via:4,wait:[0,4,5],watch:[0,5],watched_typ:0,watchedev:0,watchman:0,watchmen:7,watchpoint:5,when:[0,2],where:5,whether:[0,4,5],which:[0,4,5],whose:0,won:0,word:[4,5],wordsiz:4,work:0,write:[4,5],write_data_regist:2,write_memori:[2,4,5],write_regist:[4,5],written:[4,5],x86:[0,7],x86_64:1},titles:["avatar2 package","avatar2.archs package","avatar2.peripherals package","avatar2.plugins package","avatar2.protocols package","avatar2.targets package","Welcome to avatar\u00b2&#8217;s API-documentation!","avatar2"],titleterms:{"avatar\u00b2":6,api:6,arch:1,arm:1,avatar2:[0,1,2,3,4,5,7],avatar_peripher:2,content:[0,1,2,3,4,5],document:6,dummy_target:5,gdb:4,gdb_target:5,indic:6,instruction_forward:3,memory_rang:0,messag:0,modul:[0,1,2,3,4,5],nucleo_usart:2,openocd:4,openocd_target:5,orchestr:3,packag:[0,1,2,3,4,5],panda_target:5,peripher:2,plugin:3,protocol:4,qemu_target:5,qmp:4,remote_memori:4,submodul:[0,1,2,3,4,5],subpackag:0,tabl:6,target:5,watchmen:0,welcom:6,x86:1}})