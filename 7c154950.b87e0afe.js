(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),c=(a(0),a(169)),s={id:"ec2-nginx",title:"Self Hosting with EC2 and Nginx",sidebar_label:"Self Hosting with EC2 and Nginx"},l={id:"self-hosting/ec2-nginx",title:"Self Hosting with EC2 and Nginx",description:"These instructions make the following assumptions:",source:"@site/docs/self-hosting/ec2-nginx.md",permalink:"/newdocs/self-hosting/ec2-nginx",editUrl:"https://github.com/standardnotes/newdocs/edit/master/docs/self-hosting/ec2-nginx.md",sidebar_label:"Self Hosting with EC2 and Nginx",sidebar:"someSidebar",previous:{title:"Getting Started with Self Hosting",permalink:"/newdocs/self-hosting/getting-started"},next:{title:"Self Hosting with Docker",permalink:"/newdocs/self-hosting/docker"}},i=[{value:"Getting started",id:"getting-started",children:[]},{value:"Using your new server",id:"using-your-new-server",children:[]}],o={rightToc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"These instructions make the following assumptions:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"You've just finished using the AWS web console to launch an EC2 server with a 64 bit version of Amazon Linux AMI with ",Object(c.b)("strong",{parentName:"p"},"at least 1 GB of memory"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"You've configured your security groups to allow for incoming SSH connections from your local IP.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"You've configured a domain name (or subdomain) to point to your server's IP address."))),Object(c.b)("h3",{id:"getting-started"},"Getting started"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"SSH into your new server with the keys you should have received after launching an instance:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ssh -i /path/to/key.pem ec2-user@domain.com\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Update your system:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum update\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install RVM (Ruby Version Manager):"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3\n\n\\curl -sSL https://get.rvm.io | bash -s stable\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Begin using RVM in current session:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"source /home/ec2-user/.rvm/scripts/rvm\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install Ruby"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"rvm install ruby\n")),Object(c.b)("p",{parentName:"li"},"This should install the latest version of ruby (2.3 at the time of this writing.)"),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Note that at least Ruby 2.2.2 is required for Rails 5."))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Use Ruby"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"rvm use ruby\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install Bundler:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"gem install bundler --no-ri --no-rdoc\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install MySQL (optional; you can also use a hosted db through Amazon RDS, which is recommended):"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install mysql56-server\nsudo service mysqld start\nsudo mysql_secure_installation\nsudo yum install mysql-devel\nsudo chkconfig mysqld on\n")),Object(c.b)("p",{parentName:"li"},"Create a database:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mysql -u root -p\n> create database standard_notes;\n> quit;\n")))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install Passenger:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install rubygems\ngem install rubygems-update --no-rdoc --no-ri\nupdate_rubygems\ngem install passenger --no-rdoc --no-ri\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Remove system Nginx installation if installed (you'll use Passenger's instead):"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum remove nginx\nsudo rm -rf /etc/nginx\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Configure Passenger:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'sudo chmod o+x "/home/ec2-user"\nsudo yum install libcurl-devel\nrvmsudo passenger-install-nginx-module\nrvmsudo passenger-config validate-install\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install Git:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo yum install git\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Set up HTTPS/SSL for your server (free using LetsEncrypt) (required if using the secure client on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.standardnotes.org"}),"https://app.standardnotes.org"),"):"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo chown ec2-user /opt\ncd /opt\ngit clone https://github.com/letsencrypt/letsencrypt\ncd letsencrypt\n")),Object(c.b)("p",{parentName:"li"},"Run the setup wizard:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./letsencrypt-auto certonly --standalone --debug\n")),Object(c.b)("p",{parentName:"li"},"Note the location of the certificates, typically ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/domain.com/fullchain.pem")))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Configure Nginx:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo vim /opt/nginx/conf/nginx.conf\n")),Object(c.b)("p",{parentName:"li"},"Add this to the bottom of the file, ",Object(c.b)("em",{parentName:"p"},"inside")," the last curly brace:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-nginx"}),"server {\n    listen 443 ssl default_server;\n    ssl_certificate /etc/letsencrypt/live/domain.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/domain.com/privkey.pem;\n    server_name domain.com;\n    passenger_enabled on;\n    passenger_app_env production;\n    root /home/ec2-user/syncing-server/public;\n  }\n")))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Make sure you are in your home directory and clone the Standard Notes ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/standardnotes/syncing-server"}),"syncing-server")," project:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd ~\ngit clone https://github.com/standardnotes/syncing-server.git\ncd syncing-server\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Setup project:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"bundle install\nbower install\nrails assets:precompile\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Create a .env file for your environment variables. The Rails app will automatically load these when it starts."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vim .env\n")),Object(c.b)("p",{parentName:"li"},"Insert:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'RAILS_ENV=production\nSECRET_KEY_BASE=use "bundle exec rake secret"\n\nDB_HOST=localhost\nDB_PORT=3306\nDB_DATABASE=standard_notes\nDB_USERNAME=root\nDB_PASSWORD=\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Setup database:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"rails db:migrate\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Nginx:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo /opt/nginx/sbin/nginx\n")),Object(c.b)("p",{parentName:"li"},"Tip: you will need to restart Nginx whenever you make changes to your environment variables or the Nginx configuration:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo /opt/nginx/sbin/nginx -s reload\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You're done!"))),Object(c.b)("h2",{id:"using-your-new-server"},"Using your new server"),Object(c.b)("p",null,"You can immediately start using your new server by using the Standard Notes app at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.standardnotes.org"}),"https://app.standardnotes.org"),"."),Object(c.b)("p",null,'In the Account menu, enter the address of your new server in "Sync Server Domain" under "Advanced Options".'),Object(c.b)("p",null,"Then, register for a new account, and begin using your private new secure Standard Notes server!"))}b.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(s,".").concat(u)]||p[u]||m[u]||c;return a?r.a.createElement(d,l({ref:t},o,{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,s=new Array(c);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<c;o++)s[o]=a[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);