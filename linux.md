after moving to linux i have struggled with the basics that i used to know on windows here at this read me i will write about them and keep a single place for all the needed information for me. 

Screen shot snippets: 
on windows i used to use the snippet tool to take screenshots here i have needed to find the basic shortcuts to do it.  
https://help.ubuntu.com/stable/ubuntu-help/screen-shot-record.html

interesting shortcuts:
https://itsfoss.com/ubuntu-shortcuts/

gonna try workspace soon
https://help.ubuntu.com/stable/ubuntu-help/shell-windows.html.en#working-with-workspaces

Startup appliaction on ubuntu:
 Menu > Search > Startup Applications preferences
 


 Linux + windows 
 TODO: re-read and write a detailed report of the error and the fix :)
   The steps here are perfect! 
    https://silentinfotech.com/blog/steps-to-install-windows-10-on-existing-ubuntu-16-04/
    
    Create Partition: 
    install windows 
    fix ubuntu boot menu: 
    
    further more i needed to modify grub to open windows since it did not work immediately 
    the next solution solved it, which was to make the windows as first system to boot, then it worked well after fixing the graphic drive

   grub customizer helped to solve the problem and check them as well 
   
   to modifiy the disk i needed a live linux version since it's the root
   https://help.ubuntu.com/community/DiskSpace
    https://askubuntu.com/questions/433388/windows-7-hangs-at-grubs-purple-screen-when-dual-booting
    https://www.tenforums.com/general-support/36772-windows-10-hangs-boot-process.html
    https://launchpad.net/~danielrichter2007/+archive/ubuntu/grub-customizer
    
 Install Grub for Ubuntu
    sudo add-apt-repository ppa:yannubuntu/boot-repair && sudo apt-get update
sudo apt-get install -y boot-repair && boot-repair
