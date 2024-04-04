import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.DwbewbAn.js";const b=JSON.parse('{"title":"数据库基本概念：","description":"","frontmatter":{},"headers":[],"relativePath":"docs/backed/mysql/MySQL基本知识.md","filePath":"docs/backed/mysql/MySQL基本知识.md"}'),l={name:"docs/backed/mysql/MySQL基本知识.md"},p=e(`<h1 id="数据库基本概念" tabindex="-1">数据库基本概念： <a class="header-anchor" href="#数据库基本概念" aria-label="Permalink to &quot;数据库基本概念：&quot;">​</a></h1><h4 id="_1-数据库的英文单词-database-简称-db" tabindex="-1"><strong>1，数据库的英文单词：database 简称：DB</strong> <a class="header-anchor" href="#_1-数据库的英文单词-database-简称-db" aria-label="Permalink to &quot;**1，数据库的英文单词：database 简称：DB**&quot;">​</a></h4><h4 id="_2-什么是数据库-用于存储和管理数据的仓库。" tabindex="-1"><strong>2，什么是数据库：用于存储和管理数据的仓库。</strong> <a class="header-anchor" href="#_2-什么是数据库-用于存储和管理数据的仓库。" aria-label="Permalink to &quot;**2，什么是数据库：用于存储和管理数据的仓库。**&quot;">​</a></h4><h4 id="_3-数据库的特点" tabindex="-1"><strong>3，数据库的特点：</strong> <a class="header-anchor" href="#_3-数据库的特点" aria-label="Permalink to &quot;**3，数据库的特点：**&quot;">​</a></h4><p>​ 1，持久化存储数据的。其实数据库就是一个文件系统 ​ 2，方便存储和管理数据 ​ 3，使用了统一的方式操作数据库 ——SQL</p><h4 id="_4-常见的数据库软件-mysql-oracle" tabindex="-1">4,常见的数据库软件：mysql oracle <a class="header-anchor" href="#_4-常见的数据库软件-mysql-oracle" aria-label="Permalink to &quot;4,常见的数据库软件：mysql  oracle&quot;">​</a></h4><p>​ <img src="" alt="图片3"></p><h4 id="mysql数据库软件" tabindex="-1">MySQL数据库软件： <a class="header-anchor" href="#mysql数据库软件" aria-label="Permalink to &quot;MySQL数据库软件：&quot;">​</a></h4><p>​ 1，安装 ​ 1，详见图片 ​ 2，卸载（如果提前设置了服务自动启动要先停止服务） ​ 1，去mysql的安装目录下找到my.ini文件并复制： ​ datadir=&quot;C:/ProgramData/MySQL/MySQL Server 5.5/Data/&quot; ​ 2，卸载mysql (找到控制面板——卸载程序——mysql) ​ 3,删除C:/ProgramData目录下的MySQL文件夹 ​ 4，删除注册表 ​ 3，配置 ​ 详见图片</p><h1 id="数据库基本概念-1" tabindex="-1">数据库基本概念： <a class="header-anchor" href="#数据库基本概念-1" aria-label="Permalink to &quot;数据库基本概念：&quot;">​</a></h1><ul><li><h3 id="mysql服务启动" tabindex="-1">mysql服务启动 <a class="header-anchor" href="#mysql服务启动" aria-label="Permalink to &quot;mysql服务启动&quot;">​</a></h3><ul><li><p>手动</p></li><li><p>cmd--&gt;services.msc:启动mysql服务</p></li><li><p>net stop mysql --&gt;停止服务</p></li><li><p>net start mysql --&gt;启动服务</p></li></ul></li><li><h3 id="mysql登陆" tabindex="-1">mysql登陆： <a class="header-anchor" href="#mysql登陆" aria-label="Permalink to &quot;mysql登陆：&quot;">​</a></h3><ul><li><p>mysql -uroot -proot (mysql -uroot -p回车 输入密码)</p></li><li><p>mysql -hip -uroot -p连接目标的密码（127.0.0.1代表本机的ip）</p></li><li><p>mysql --host=ip --user=root --password=连接目标的密码</p></li></ul></li><li><h3 id="mysql退出" tabindex="-1">mysql退出： <a class="header-anchor" href="#mysql退出" aria-label="Permalink to &quot;mysql退出：&quot;">​</a></h3><ul><li>1,直接关闭doc窗口</li><li>exit</li><li>quit</li></ul><h1 id="数据库基本概念-2" tabindex="-1">数据库基本概念： <a class="header-anchor" href="#数据库基本概念-2" aria-label="Permalink to &quot;数据库基本概念：&quot;">​</a></h1></li></ul><h2 id="sql" tabindex="-1">SQL: <a class="header-anchor" href="#sql" aria-label="Permalink to &quot;SQL:&quot;">​</a></h2><h4 id="什么是sql" tabindex="-1">什么是SQL? <a class="header-anchor" href="#什么是sql" aria-label="Permalink to &quot;什么是SQL?&quot;">​</a></h4><ul><li>结构化查询语言。</li><li>其实就是定义操作所有关系型数据库的一种规则，每一种数据库操作的方式存在不一样的地方，我们成为方言。</li></ul><h4 id="sql通用语法" tabindex="-1">SQL通用语法 <a class="header-anchor" href="#sql通用语法" aria-label="Permalink to &quot;SQL通用语法&quot;">​</a></h4><ul><li>sql语句可以单行或多行书写，以分号结尾</li><li>可使用空格和缩进来增强语句的可读性</li><li>mysql数据库的sql语句不区分大小写 建议用大写</li></ul><h4 id="三种注释" tabindex="-1">三种注释： <a class="header-anchor" href="#三种注释" aria-label="Permalink to &quot;三种注释：&quot;">​</a></h4><ul><li>单行注释：-- 注释内容 或 # 注释内容（mysql特有）</li><li>多行注释：/* 注释*/</li></ul><h4 id="sql分类" tabindex="-1">SQL分类： <a class="header-anchor" href="#sql分类" aria-label="Permalink to &quot;SQL分类：&quot;">​</a></h4><ul><li><p>DDL(操作数据库和表)</p></li><li><p>DML(操作（增删改）表中的数据)</p></li><li><p>DQL（查询表中的数据）</p></li><li><p>DCL（用来定义数据库的访问权限和安全级别）</p></li></ul><h2 id="ddl-操作数据库和表" tabindex="-1">DDL:操作数据库和表： <a class="header-anchor" href="#ddl-操作数据库和表" aria-label="Permalink to &quot;DDL:操作数据库和表：&quot;">​</a></h2><h3 id="操作数据库" tabindex="-1">操作数据库： <a class="header-anchor" href="#操作数据库" aria-label="Permalink to &quot;操作数据库：&quot;">​</a></h3><h4 id="创建" tabindex="-1">创建： <a class="header-anchor" href="#创建" aria-label="Permalink to &quot;创建：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 创建数据库</span></span>
<span class="line"><span>create database 数据库名称；</span></span>
<span class="line"><span>-- 创建数据库，判断存不存在，如果不存在，才创建</span></span>
<span class="line"><span>create database if not exists 数据库名称；</span></span>
<span class="line"><span>-- 创建数据库，并指定字符集</span></span>
<span class="line"><span>create database 数据库名称 character set 字符集名；</span></span></code></pre></div><h4 id="查询" tabindex="-1">查询： <a class="header-anchor" href="#查询" aria-label="Permalink to &quot;查询：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 查询所有数据库的名称</span></span>
<span class="line"><span>show databases;</span></span>
<span class="line"><span>-- 查询某个数据库的字符集，查询某个数据库的创建语句</span></span>
<span class="line"><span>show create database 数据库名称；</span></span>
<span class="line"><span>-- 练习：创建db3数据库，判断是否存在，并指定字符集是gbk.</span></span></code></pre></div><h4 id="修改" tabindex="-1">修改： <a class="header-anchor" href="#修改" aria-label="Permalink to &quot;修改：&quot;">​</a></h4><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 修改数据库编码格式</span></span>
<span class="line"><span>alter database 数据库名称 character set 新编码格式;</span></span></code></pre></div><h4 id="删除" tabindex="-1">删除： <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 删除数据库</span></span>
<span class="line"><span>drop database 数据库名称;</span></span>
<span class="line"><span>-- 删除数据库判断是否存在</span></span>
<span class="line"><span>drop database if exists 数据库名称;</span></span></code></pre></div><h4 id="使用数据库" tabindex="-1">使用数据库： <a class="header-anchor" href="#使用数据库" aria-label="Permalink to &quot;使用数据库：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 显示正在使用的数据库</span></span>
<span class="line"><span>select database();</span></span>
<span class="line"><span>-- 进入某个数据库</span></span>
<span class="line"><span>use 数据库名称;</span></span></code></pre></div><h3 id="操作表" tabindex="-1">操作表： <a class="header-anchor" href="#操作表" aria-label="Permalink to &quot;操作表：&quot;">​</a></h3><h4 id="创建-1" tabindex="-1">创建 <a class="header-anchor" href="#创建-1" aria-label="Permalink to &quot;创建&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>语法：create table 表名（</span></span>
<span class="line"><span>  列名1 数据类型1，</span></span>
<span class="line"><span>  列名2 数据类型2，</span></span>
<span class="line"><span>  列名3 数据类型3，</span></span>
<span class="line"><span>  ......</span></span>
<span class="line"><span>）;</span></span></code></pre></div><p>注意：最后一列不需要加逗号。</p><ul><li><h5 id="数据类型" tabindex="-1">数据类型： <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型：&quot;">​</a></h5><ul><li><p>int：整数类型</p><ul><li>unsigned:无符号 只能是正数 不能存负数。</li></ul></li><li><p>double（M，D）:小数类型</p><ul><li><p>float(M,D):其中M表示小数总的位数，D表示小数点后保留的位数</p></li><li><p>decimal(M,D):其中M表示小数总的位数，D表示小数点后保留的位数</p></li></ul></li><li><p><strong><strong>区别</strong>：</strong></p><ul><li><p>所占空间不一样，float只占4个字节空间，decimal占8个字节空间</p></li><li><p>精度不一样，decimal精度要高于float，建议个金钱相关的使用decimal</p></li></ul></li></ul></li><li><p>,data:日期：只包含年月日 yyyy-MM-dd</p></li><li><p>datatime:日期：包含年月日 时分秒 yyyy-MM-dd HH:mm:ss</p></li><li><p>****timestamp:时间戳 包含年月日 时分秒 yyyy-MM-dd HH:mm:ss</p><ul><li>如果咱们不给这个字段赋值，那么系统会自动给赋值当前系统时间</li></ul></li><li><p>varchar 字符串</p></li><li><p>char（5）:固定长度（范围0~255）</p></li><li><p>varchar（20）:可变的长度 （范围0~21845）</p></li><li><p>text:大文本</p></li><li><p>应用场景：</p><ul><li><p>char：手机号码、四字成语。。。</p></li><li><p>varchar: 姓名 简介。。。</p></li><li><p>text：大文本 论文。。。</p></li></ul></li><li><p><strong>枚举</strong></p><ul><li><p>类似于表单中的单选 男 女 保密</p></li><li><p>语法：列名 enum(&#39;男&#39;,&#39;女&#39;,&#39;&#39;保密&#39;)；</p></li><li><p>插入数据的时候，只能插入我列举出的某一项。</p></li></ul></li><li><p><strong>集合</strong></p><ul><li><p>集合类型 类似于表单中的多选</p></li><li><p>语法：列名 set(&#39;篮球&#39;,&#39;足球&#39;,&#39;乒乓球&#39;)；</p></li><li><p>插入数据的时候 可以插入我提供的多个选型</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 创建表：</span></span>
<span class="line"><span>create table student(</span></span>
<span class="line"><span>	id int,</span></span>
<span class="line"><span>	name varchar(20),</span></span>
<span class="line"><span>	gender char(2),</span></span>
<span class="line"><span>	age int unsigned,</span></span>
<span class="line"><span>	money double(6,2),</span></span>
<span class="line"><span>	date timestamp,</span></span>
<span class="line"><span>	home varchar(100)</span></span>
<span class="line"><span>);</span></span></code></pre></div></li></ul></li></ul><h4 id="查询-1" tabindex="-1">查询 <a class="header-anchor" href="#查询-1" aria-label="Permalink to &quot;查询&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 查询某个数据库所有表的名称</span></span>
<span class="line"><span> 	show tables;</span></span>
<span class="line"><span>-- 查询表的结构</span></span>
<span class="line"><span> 	desc 表名；</span></span></code></pre></div><h4 id="修改-1" tabindex="-1">修改 <a class="header-anchor" href="#修改-1" aria-label="Permalink to &quot;修改&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 修改表名</span></span>
<span class="line"><span>alter table 表名 rename to 新的表名;</span></span>
<span class="line"><span>-- 修改表的字符集</span></span>
<span class="line"><span>alter table 表名 character set 字符集名称;</span></span>
<span class="line"><span>-- 添加一列</span></span>
<span class="line"><span>alter table 表名 add 列名 数据类型；</span></span>
<span class="line"><span>-- 修改类的名称 类型</span></span>
<span class="line"><span>alter table 表名 change 列名 新列名 新数据类型；</span></span>
<span class="line"><span>alter table 表名 modify 列名 新数据类型；</span></span>
<span class="line"><span>-- 删除列</span></span>
<span class="line"><span>alter table 表名 drop 列名；</span></span></code></pre></div><h4 id="删除-1" tabindex="-1">删除 <a class="header-anchor" href="#删除-1" aria-label="Permalink to &quot;删除&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 删除表</span></span>
<span class="line"><span>drop table 表名;</span></span>
<span class="line"><span>-- 删除表，先判断存不存在</span></span>
<span class="line"><span>drop table if exists 表名；</span></span></code></pre></div><h2 id="dml操作数据" tabindex="-1">DML操作数据： <a class="header-anchor" href="#dml操作数据" aria-label="Permalink to &quot;DML操作数据：&quot;">​</a></h2><h4 id="添加数据" tabindex="-1">添加数据： <a class="header-anchor" href="#添加数据" aria-label="Permalink to &quot;添加数据：&quot;">​</a></h4><ul><li><p>语法：</p><ul><li><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 添加数据</span></span>
<span class="line"><span>insert into 表名 set 列1 = 值1,列2 = 值2 ... where 判断条件;</span></span></code></pre></div></li></ul></li><li><p>注意事项</p><ol><li>列名要和值一一对应。</li><li>如果表名后不加列名，则默认给所有列添加值。insert into 表名 values (值1，值2...);</li><li>除了数字类型，其他类型需要引号包起来</li></ol></li></ul><h4 id="删除数据" tabindex="-1">删除数据： <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据：&quot;">​</a></h4><ul><li><p>语法：</p><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>delete from 表名 [where 条件]；</span></span></code></pre></div></li></ul></li><li><p>注意：</p><ol><li>如果不加条件，则删除表中所有记录</li></ol></li><li><p>补充：</p><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>delete from 表名;-- 不建议使用，有多少条语句就执行多少次操作</span></span>
<span class="line"><span>truncate table 表名; -- 推荐使用 只执行一次 效率高</span></span></code></pre></div></li></ul></li></ul><h4 id="修改数据" tabindex="-1">修改数据： <a class="header-anchor" href="#修改数据" aria-label="Permalink to &quot;修改数据：&quot;">​</a></h4><ul><li><p>语法：</p><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>update 表名 set 列名1 = 值1,列名2 = 值2,... [where 条件];</span></span></code></pre></div></li></ul></li><li><p>注意：</p><ul><li>如果不加任何条件，则将表中的数据全部更改。</li></ul><h1 id="数据库ddl" tabindex="-1">数据库DDL： <a class="header-anchor" href="#数据库ddl" aria-label="Permalink to &quot;数据库DDL：&quot;">​</a></h1></li></ul><h2 id="操作数据库-1" tabindex="-1">操作数据库： <a class="header-anchor" href="#操作数据库-1" aria-label="Permalink to &quot;操作数据库：&quot;">​</a></h2><h4 id="创建-2" tabindex="-1">创建： <a class="header-anchor" href="#创建-2" aria-label="Permalink to &quot;创建：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 创建数据库</span></span>
<span class="line"><span>create database 数据库名称；</span></span>
<span class="line"><span>-- 创建数据库，判断存不存在，如果不存在，才创建</span></span>
<span class="line"><span>create database if not exists 数据库名称；</span></span>
<span class="line"><span>-- 创建数据库，并指定字符集</span></span>
<span class="line"><span>create database 数据库名称 character set 字符集名；</span></span></code></pre></div><h4 id="查询-2" tabindex="-1">查询： <a class="header-anchor" href="#查询-2" aria-label="Permalink to &quot;查询：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 查询所有数据库的名称</span></span>
<span class="line"><span>show databases;</span></span>
<span class="line"><span>-- 查询某个数据库的字符集，查询某个数据库的创建语句</span></span>
<span class="line"><span>show create database 数据库名称；</span></span>
<span class="line"><span>-- 练习：创建db3数据库，判断是否存在，并指定字符集是gbk.</span></span></code></pre></div><h4 id="修改-2" tabindex="-1">修改： <a class="header-anchor" href="#修改-2" aria-label="Permalink to &quot;修改：&quot;">​</a></h4><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 修改数据库编码格式</span></span>
<span class="line"><span>alter database 数据库名称 character set 新编码格式;</span></span></code></pre></div><h4 id="删除-2" tabindex="-1">删除： <a class="header-anchor" href="#删除-2" aria-label="Permalink to &quot;删除：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 删除数据库</span></span>
<span class="line"><span>drop database 数据库名称;</span></span>
<span class="line"><span>-- 删除数据库判断是否存在</span></span>
<span class="line"><span>drop database if exists 数据库名称;</span></span></code></pre></div><h4 id="使用数据库-1" tabindex="-1">使用数据库： <a class="header-anchor" href="#使用数据库-1" aria-label="Permalink to &quot;使用数据库：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 显示正在使用的数据库</span></span>
<span class="line"><span>select database();</span></span>
<span class="line"><span>-- 进入某个数据库</span></span>
<span class="line"><span>use 数据库名称;</span></span></code></pre></div><h2 id="操作表-1" tabindex="-1">操作表： <a class="header-anchor" href="#操作表-1" aria-label="Permalink to &quot;操作表：&quot;">​</a></h2><h4 id="创建-3" tabindex="-1">创建 <a class="header-anchor" href="#创建-3" aria-label="Permalink to &quot;创建&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>语法：create table 表名（</span></span>
<span class="line"><span>  列名1 数据类型1，</span></span>
<span class="line"><span>  列名2 数据类型2，</span></span>
<span class="line"><span>  列名3 数据类型3，</span></span>
<span class="line"><span>  ......</span></span>
<span class="line"><span>）;</span></span></code></pre></div><p>注意：最后一列不需要加逗号。</p><h2 id="数据类型-1" tabindex="-1">数据类型： <a class="header-anchor" href="#数据类型-1" aria-label="Permalink to &quot;数据类型：&quot;">​</a></h2><ul><li><p>int：整数类型</p><ul><li><p>unsigned:无符号 只能是正数 不能存负数。</p></li><li><p>double（M，D）:小数类型</p><ul><li><p>float(M,D):其中M表示小数总的位数，D表示小数点后保留的位数</p></li><li><p>decimal(M,D):其中M表示小数总的位数，D表示小数点后保留的位数</p></li></ul></li><li><p><strong><strong>区别</strong>：</strong></p><ul><li><p>所占空间不一样，float只占4个字节空间，decimal占8个字节空间</p></li><li><p>精度不一样，decimal精度要高于float，建议个金钱相关的使用decimal</p></li></ul></li></ul></li><li><p>,data:日期：只包含年月日 yyyy-MM-dd</p></li><li><p>datatime:日期：包含年月日 时分秒 yyyy-MM-dd HH:mm:ss</p></li><li><p>****timestamp:时间戳 包含年月日 时分秒 yyyy-MM-dd HH:mm:ss</p><ul><li>如果咱们不给这个字段赋值，那么系统会自动给赋值当前系统时间</li></ul></li><li><p>varchar 字符串</p></li><li><p>char（5）:固定长度（范围0~255）</p></li><li><p>varchar（20）:可变的长度 （范围0~21845）</p></li><li><p>text:大文本</p></li><li><p>应用场景：</p><ul><li><p>char：手机号码、四字成语。。。</p></li><li><p>varchar: 姓名 简介。。。</p></li><li><p>text：大文本 论文。。。</p></li></ul></li><li><p><strong>枚举</strong></p><ul><li><p>类似于表单中的单选 男 女 保密</p></li><li><p>语法：列名 enum(&#39;男&#39;,&#39;女&#39;,&#39;&#39;保密&#39;)；</p></li><li><p>插入数据的时候，只能插入我列举出的某一项。</p></li></ul></li><li><p><strong>集合</strong></p><ul><li><p>集合类型 类似于表单中的多选</p></li><li><p>语法：列名 set(&#39;篮球&#39;,&#39;足球&#39;,&#39;乒乓球&#39;)；</p></li><li><p>插入数据的时候 可以插入我提供的多个选型</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 创建表：</span></span>
<span class="line"><span>create table student(</span></span>
<span class="line"><span>	id int,</span></span>
<span class="line"><span>	name varchar(20),</span></span>
<span class="line"><span>	gender char(2),</span></span>
<span class="line"><span>	age int unsigned,</span></span>
<span class="line"><span>	money double(6,2),</span></span>
<span class="line"><span>	date timestamp,</span></span>
<span class="line"><span>	home varchar(100)</span></span>
<span class="line"><span>);</span></span></code></pre></div></li></ul></li></ul><h4 id="查询-3" tabindex="-1">查询 <a class="header-anchor" href="#查询-3" aria-label="Permalink to &quot;查询&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 查询某个数据库所有表的名称</span></span>
<span class="line"><span> 	show tables;</span></span>
<span class="line"><span>-- 查询表的结构</span></span>
<span class="line"><span> 	desc 表名；</span></span></code></pre></div><h4 id="修改-3" tabindex="-1">修改 <a class="header-anchor" href="#修改-3" aria-label="Permalink to &quot;修改&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 修改表名</span></span>
<span class="line"><span>alter table 表名 rename to 新的表名;</span></span>
<span class="line"><span>-- 修改表的字符集</span></span>
<span class="line"><span>alter table 表名 character set 字符集名称;</span></span>
<span class="line"><span>-- 添加一列</span></span>
<span class="line"><span>alter table 表名 add 列名 数据类型；</span></span>
<span class="line"><span>-- 修改类的名称 类型</span></span>
<span class="line"><span>alter table 表名 change 列名 新列名 新数据类型；</span></span>
<span class="line"><span>alter table 表名 modify 列名 新数据类型；</span></span>
<span class="line"><span>-- 删除列</span></span>
<span class="line"><span>alter table 表名 drop 列名；</span></span></code></pre></div><h4 id="删除-3" tabindex="-1">删除 <a class="header-anchor" href="#删除-3" aria-label="Permalink to &quot;删除&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 删除表</span></span>
<span class="line"><span>drop table 表名;</span></span>
<span class="line"><span>-- 删除表，先判断存不存在</span></span>
<span class="line"><span>drop table if exists 表名；</span></span></code></pre></div><h1 id="数据库基本概念dml" tabindex="-1">数据库基本概念DML： <a class="header-anchor" href="#数据库基本概念dml" aria-label="Permalink to &quot;数据库基本概念DML：&quot;">​</a></h1><h4 id="添加数据-1" tabindex="-1">添加数据： <a class="header-anchor" href="#添加数据-1" aria-label="Permalink to &quot;添加数据：&quot;">​</a></h4><ul><li><p>语法：</p><ul><li><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 添加数据</span></span>
<span class="line"><span>insert into 表名 set 列1 = 值1,列2 = 值2 ... where 判断条件;</span></span></code></pre></div></li></ul></li><li><p>注意事项</p><ol><li>列名要和值一一对应。</li><li>如果表名后不加列名，则默认给所有列添加值。insert into 表名 values (值1，值2...);</li><li>除了数字类型，其他类型需要引号包起来</li></ol></li></ul><h4 id="删除数据-1" tabindex="-1">删除数据： <a class="header-anchor" href="#删除数据-1" aria-label="Permalink to &quot;删除数据：&quot;">​</a></h4><ul><li><p>语法：</p><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>delete from 表名 [where 条件]；</span></span></code></pre></div></li></ul></li><li><p>注意：</p><ol><li>如果不加条件，则删除表中所有记录</li></ol></li><li><p>补充：</p><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>delete from 表名;-- 不建议使用，有多少条语句就执行多少次操作</span></span>
<span class="line"><span>truncate table 表名; -- 推荐使用 只执行一次 效率高</span></span></code></pre></div></li></ul></li></ul><h4 id="修改数据-1" tabindex="-1">修改数据： <a class="header-anchor" href="#修改数据-1" aria-label="Permalink to &quot;修改数据：&quot;">​</a></h4><ul><li><p>语法：</p><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>update 表名 set 列名1 = 值1,列名2 = 值2,... [where 条件];</span></span></code></pre></div></li></ul></li><li><p>注意：</p><ul><li>如果不加任何条件，则将表中的数据全部更改。</li></ul></li></ul><p><strong>补充：如果某个记录字段上面没有数据，想要添加数据，不要能使用insert into只能使用update修改数据</strong></p><p>​ <strong>非常重要！！！</strong></p><p>​ <strong>非常重要！！！</strong></p><p>​ <strong>非常重要！！！</strong></p><h1 id="数据库dql查询" tabindex="-1">数据库DQL查询： <a class="header-anchor" href="#数据库dql查询" aria-label="Permalink to &quot;数据库DQL查询：&quot;">​</a></h1><h2 id="普通查询基础" tabindex="-1">普通查询基础: <a class="header-anchor" href="#普通查询基础" aria-label="Permalink to &quot;普通查询基础:&quot;">​</a></h2><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 普通查询基础</span></span>
<span class="line"><span>select * from 表名;</span></span>
<span class="line"><span>语法：</span></span>
<span class="line"><span>	select </span></span>
<span class="line"><span>		字段列表</span></span>
<span class="line"><span>	from</span></span>
<span class="line"><span>		表名列表</span></span>
<span class="line"><span>	where</span></span>
<span class="line"><span>		条件列表</span></span>
<span class="line"><span>	group by</span></span>
<span class="line"><span>		分组字段</span></span>
<span class="line"><span>	having</span></span>
<span class="line"><span>		分组之后的条件</span></span>
<span class="line"><span>	order by</span></span>
<span class="line"><span>		排序</span></span>
<span class="line"><span>	limit</span></span>
<span class="line"><span>		分页限定</span></span></code></pre></div></li></ul><h2 id="基础查询" tabindex="-1">基础查询： <a class="header-anchor" href="#基础查询" aria-label="Permalink to &quot;基础查询：&quot;">​</a></h2><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>-- 1，多个字段的查询</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	SELECT 标识选择哪些列</span></span>
<span class="line"><span>	FROM 标识从哪个表中选择</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	select 字段名1,字段名2,... from 表名；</span></span>
<span class="line"><span>	如果需要展示所有字段，可以用*来代替：</span></span>
<span class="line"><span>	select * from 表名;</span></span>
<span class="line"><span>-- 2，去除重复</span></span>
<span class="line"><span>	* distinct</span></span>
<span class="line"><span>	SELECT DISTINCT 列名 from 表名;</span></span>
<span class="line"><span>-- 3,计算列</span></span>
<span class="line"><span>	* 一般可以使用四则运算计算一些列的值，（一般只会进行数值类型的运算）</span></span>
<span class="line"><span>	ifnull(表达式1,表达式2) null参与的运算，计算结果都是null</span></span>
<span class="line"><span>		表达式1：代表哪个字段需要判断是否为null</span></span>
<span class="line"><span>		表达式2：如果该字段为null后需要替换的值</span></span>
<span class="line"><span>-- 4，起别名：</span></span>
<span class="line"><span>	* as 别名； -- as可以省略</span></span></code></pre></div></li></ul><h2 id="条件查询" tabindex="-1">条件查询： <a class="header-anchor" href="#条件查询" aria-label="Permalink to &quot;条件查询：&quot;">​</a></h2><ul><li><p><strong>where字句后跟条件</strong></p></li><li><p><strong>运算符</strong>：</p><ul><li><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; &lt; &gt;= &lt;= = &lt;&gt;</span></span>
<span class="line"><span>between...and （在什么什么之间）</span></span>
<span class="line"><span>in (集合)</span></span>
<span class="line"><span>like(模糊查询)</span></span>
<span class="line"><span>_:单个任意字符</span></span>
<span class="line"><span>%：多个任意字符</span></span>
<span class="line"><span>is null </span></span>
<span class="line"><span>and 或 &amp;&amp;</span></span>
<span class="line"><span>or 或 ||</span></span>
<span class="line"><span>not 或 ！</span></span></code></pre></div><ul><li><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 查询年龄大于20岁</span></span>
<span class="line"><span>    SELECT * from student where age&gt;20;</span></span>
<span class="line"><span>-- 查询年龄大于等于20岁</span></span>
<span class="line"><span>    SELECT * from student where age &gt;= 20;</span></span>
<span class="line"><span>-- 查询年龄等于20岁</span></span>
<span class="line"><span>    SELECT * from student where age = 20;</span></span>
<span class="line"><span>-- 查询年龄大于等于20，小于等于30的人</span></span>
<span class="line"><span>    SELECT * from student where age&gt;=20 &amp;&amp; age&lt;=30; -- 不建议用</span></span>
<span class="line"><span>    SELECT * from student where age&gt;=20 AND age&lt;=30;  --不建议用</span></span>
<span class="line"><span>    SELECT * FROM student WHERE age BETWEEN 20 AND 30;  -- 建议用</span></span>
<span class="line"><span>-- 查询年龄是 18 22 25 的人</span></span>
<span class="line"><span>    select * from student where age=18 || age=22 || age=25; -- 不建议用</span></span>
<span class="line"><span>    select * from student where age=18 OR age=22 OR age=25; -- 不建议用</span></span>
<span class="line"><span>    select * from student where age in (18,22,25); -- 建议用</span></span>
<span class="line"><span>-- 查询英语成绩为null的人</span></span>
<span class="line"><span>    select * from student where english is null;</span></span>
<span class="line"><span>-- 查询英语成绩不为null的人</span></span></code></pre></div></li></ul></li></ul></li></ul><h2 id="排序查询" tabindex="-1">排序查询： <a class="header-anchor" href="#排序查询" aria-label="Permalink to &quot;排序查询：&quot;">​</a></h2><ul><li><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 语法：order by 字句</span></span>
<span class="line"><span>order by 排序字段1 排序方式1,排序字段2 排序方式2...</span></span>
<span class="line"><span>-- 排序方式： 1升序 asc 默认  2  降序 desc </span></span>
<span class="line"><span>注意：</span></span>
<span class="line"><span>-- 如果有多个排序字段，当前面的值一样的时候，才会判断第二条件</span></span>
<span class="line"><span>-- 以数学成绩排序 从低到高：</span></span>
<span class="line"><span>	select * from student ORDER BY math;  -- 默认升序 asc</span></span>
<span class="line"><span>-- 以数学成绩排序 从高到低：</span></span>
<span class="line"><span>	select * from student ORDER BY math DESC;</span></span>
<span class="line"><span>-- 以数学成绩排序 从高到低，如果数学成绩相同，那么以英语排名，从低到高</span></span>
<span class="line"><span>	select * from student ORDER BY math DESC, english ASC;</span></span></code></pre></div></li></ul><h2 id="聚合函数" tabindex="-1">聚合函数： <a class="header-anchor" href="#聚合函数" aria-label="Permalink to &quot;聚合函数：&quot;">​</a></h2><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>将一列的数据作为一个整体，进行纵向的计算  count(*)</span></span>
<span class="line"><span>1，count:计算个数</span></span>
<span class="line"><span>	一般选择非空的列  主键</span></span>
<span class="line"><span>	例如：select count(id) from student;</span></span>
<span class="line"><span>2，max:计算最大值</span></span>
<span class="line"><span>	例如：select MAX(math) from student;</span></span>
<span class="line"><span>3，min:计算最小值</span></span>
<span class="line"><span>	例如：select min(math) from student;</span></span>
<span class="line"><span>4，sum：计算和</span></span>
<span class="line"><span>	例如：select SUM(math) from student;</span></span>
<span class="line"><span>5，avg：计算平均值</span></span>
<span class="line"><span>	例如：select avg(math) from student;</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>注意：聚合函数的计算排除了null值</span></span>
<span class="line"><span>解决方案：</span></span>
<span class="line"><span>1，选择不包含null值的列</span></span>
<span class="line"><span>2，ifnull函数</span></span></code></pre></div></li></ul><h2 id="分组查询" tabindex="-1">分组查询： <a class="header-anchor" href="#分组查询" aria-label="Permalink to &quot;分组查询：&quot;">​</a></h2><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>分组查询：</span></span>
<span class="line"><span>1，语法：group by 分组的字段</span></span>
<span class="line"><span>		注意：分组之后查询的字段：分组的字段或者聚合函数</span></span>
<span class="line"><span>2，where和having有什么区别：</span></span>
<span class="line"><span>	1，where在分组之前进行限定，如果不满足条件，不参与分组。having在分组之后进行限定，如果不满足结果，则不会被查询出来</span></span>
<span class="line"><span>	2，where之后不可以跟聚合函数，having可以进行聚合函数的判断</span></span>
<span class="line"><span>-- 根据性别分组，分别查询男女同学的平均分</span></span>
<span class="line"><span>	select sex,avg(math) from student GROUP BY sex;</span></span>
<span class="line"><span>-- 按照性别分组，分别查询男女同学的平均分 、人数</span></span>
<span class="line"><span>	select sex,avg(math),COUNT(id) from student GROUP BY sex;</span></span>
<span class="line"><span>-- 按照性别分组，分别查询男女同学的平均分 、人数 要求：低于70的人不参与分组</span></span>
<span class="line"><span>	select sex,avg(math),COUNT(id) from student WHERE math &gt; 70 GROUP BY sex;</span></span>
<span class="line"><span>-- 按照性别分组，分别查询男女同学的平均分 、人数 要求：低于70的人不参与分组 分组之后，人数大于2人</span></span>
<span class="line"><span>	select sex,avg(math),COUNT(id) from student WHERE math &gt; 70 GROUP BY sex HAVING COUNT(id)&gt;2;</span></span>
<span class="line"><span>-- 起别名：</span></span>
<span class="line"><span>	select sex,avg(math),COUNT(id) 人数 from student WHERE math &gt; 70 GROUP BY sex HAVING 人数&gt;2;</span></span></code></pre></div></li></ul><h2 id="分页查询" tabindex="-1">分页查询： <a class="header-anchor" href="#分页查询" aria-label="Permalink to &quot;分页查询：&quot;">​</a></h2><ul><li><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 语法：limit 开始的索引,每页查询的条数</span></span>
<span class="line"><span>-- 公式：开始的索引 = （当前的页码-1）*每页显示的条数</span></span>
<span class="line"><span>-- 每页展示3条数据</span></span>
<span class="line"><span>select * from student LIMIT 0,3; -- 第1页 （1-1）*3 = 0</span></span>
<span class="line"><span>select * from student LIMIT 3,3; -- 第2页 （2-1）*3 = 3</span></span>
<span class="line"><span>select * from student LIMIT 6,3; -- 第3页 （3-1）*3 = 6</span></span>
<span class="line"><span>-- 注意：limit 是mysql的一个 方言</span></span></code></pre></div></li></ul><h1 id="mysql约束" tabindex="-1">MySQL约束： <a class="header-anchor" href="#mysql约束" aria-label="Permalink to &quot;MySQL约束：&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念： <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念：&quot;">​</a></h2><p>​ <strong>对表中的数据进行限定，保证谁数据的正确性，有效性和完整性</strong></p><h2 id="分类" tabindex="-1">分类： <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类：&quot;">​</a></h2><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>主键约束 primary key</span></span>
<span class="line"><span>非空约束 not null</span></span>
<span class="line"><span>唯一约束 unique</span></span>
<span class="line"><span>外键约束 foreign key</span></span>
<span class="line"><span>自动生长 auto_increment</span></span></code></pre></div><h2 id="非空约束-not-null" tabindex="-1">非空约束 not null： <a class="header-anchor" href="#非空约束-not-null" aria-label="Permalink to &quot;非空约束 not null：&quot;">​</a></h2><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- not null  某一列的值不能为空（null）</span></span>
<span class="line"><span>-- 创建表的时候添加约束：</span></span>
<span class="line"><span>	create table stu1(</span></span>
<span class="line"><span>		id int,</span></span>
<span class="line"><span>		name varchar(20) not null	</span></span>
<span class="line"><span>	);</span></span>
<span class="line"><span>-- 删除非空约束：</span></span>
<span class="line"><span>	alter table stu1 modify name varchar(20);</span></span>
<span class="line"><span>-- 创建完表之后添加约束：</span></span>
<span class="line"><span>	alter table stu1 modify name varchar(20) not null;</span></span></code></pre></div><h2 id="唯一约束-unique" tabindex="-1">唯一约束 unique： <a class="header-anchor" href="#唯一约束-unique" aria-label="Permalink to &quot;唯一约束 unique：&quot;">​</a></h2><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- unique 唯一约束 某一字段数据不能出现一样的数据</span></span>
<span class="line"><span>-- 创建表的时候添加唯一约束</span></span>
<span class="line"><span>    create table stu2(</span></span>
<span class="line"><span>        id int,</span></span>
<span class="line"><span>        phone_number varchar(20) unique</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 删除约束 不能使用修改数据类型来删除，只能使用特定的</span></span>
<span class="line"><span>	-- 语法：alter table 表名 drop index 字段名;</span></span>
<span class="line"><span>	alter table stu2 drop index phone_number;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>-- 创建玩表之后添加约束</span></span>
<span class="line"><span>	-- 语法：alter table 表名 modify 字段名 数据类型 约束;</span></span>
<span class="line"><span>	alter table stu2 modify phone_number varchar(20) unique;</span></span></code></pre></div><h2 id="主键约束primary-key" tabindex="-1">主键约束primary key： <a class="header-anchor" href="#主键约束primary-key" aria-label="Permalink to &quot;主键约束primary key：&quot;">​</a></h2><h3 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意：&quot;">​</a></h3><ol><li>含义：非空且唯一</li><li>一张表只能有一个字段为主键</li><li>主键就是表中记录的唯一标识</li></ol><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 创建表时添加主键约束：</span></span>
<span class="line"><span>	create table stu3(</span></span>
<span class="line"><span>		id int primary key,</span></span>
<span class="line"><span>		name varchar(20)</span></span>
<span class="line"><span>	);</span></span>
<span class="line"><span>-- 删除主键：</span></span>
<span class="line"><span>	alter table stu3 drop primary key;</span></span>
<span class="line"><span>	alter table stu3 MODIFY id int;</span></span>
<span class="line"><span>-- 创建完表之后添加主键：</span></span>
<span class="line"><span>	alter table stu3 modify id int primary key;</span></span></code></pre></div><h2 id="自动生长auto-increment" tabindex="-1">自动生长auto_increment： <a class="header-anchor" href="#自动生长auto-increment" aria-label="Permalink to &quot;自动生长auto_increment：&quot;">​</a></h2><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 概念：如果某一列是数值类型的，使用auto_increment可以完成值自动增长（+1）</span></span>
<span class="line"><span>-- 在创建表的时候添加自动增长：</span></span>
<span class="line"><span>	create table stu4(</span></span>
<span class="line"><span>		id int primary key auto_increment,</span></span>
<span class="line"><span>		name varchar(20)</span></span>
<span class="line"><span>	);</span></span>
<span class="line"><span>-- 删除自动增长：</span></span>
<span class="line"><span>	alter table stu4 modify id int;</span></span>
<span class="line"><span>-- 创建完表，添加自动增长：</span></span>
<span class="line"><span>	alter table stu4 modify id int auto_increment;</span></span></code></pre></div><h2 id="外键约束foreign-key" tabindex="-1">外键约束foreign key： <a class="header-anchor" href="#外键约束foreign-key" aria-label="Permalink to &quot;外键约束foreign key：&quot;">​</a></h2><h3 id="概念-1" tabindex="-1">概念： <a class="header-anchor" href="#概念-1" aria-label="Permalink to &quot;概念：&quot;">​</a></h3><p>​ 在从表中与主表主键对应的那一列就是外键主表：一的一方 从表：多的一方</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 创建完表后添加外键约束：</span></span>
<span class="line"><span>	alter table 表名 add CONSTRAINT 外键名称 foreign key 从表名称(从表字段名称) references 主表名称(主表列名称);</span></span>
<span class="line"><span>	例如：alter table emp add CONSTRAINT aaa FOREIGN KEY dept(dept_id) REFERENCES tept(id);</span></span>
<span class="line"><span>-- 在创建表的同时添加外键约束：</span></span>
<span class="line"><span>	create table 表名(</span></span>
<span class="line"><span>		id int PRIMARY KEY auto_increment,</span></span>
<span class="line"><span>		name VARCHAR(20),</span></span>
<span class="line"><span>		age int UNSIGNED,</span></span>
<span class="line"><span>		dept_id int,</span></span>
<span class="line"><span>		CONSTRAINT 外键名称 foreign key (外键字段名称) references 主表名称(主表列名称);</span></span>
<span class="line"><span>	);</span></span>
<span class="line"><span>-- 删除外键：</span></span>
<span class="line"><span>	alter table 表名 drop foreign key 外键名称;</span></span>
<span class="line"><span>	例如：alter table emp drop foreign key aaa;</span></span></code></pre></div><h3 id="级联操作" tabindex="-1">级联操作： <a class="header-anchor" href="#级联操作" aria-label="Permalink to &quot;级联操作：&quot;">​</a></h3><div class="language-MySQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">MySQL</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>语法：</span></span>
<span class="line"><span>	alter table 表名 add CONSTRAINT 外键名称 foreign key (外键字段名称) references 主表名称(主表列名称) on update cascade;</span></span>
<span class="line"><span>分类：</span></span>
<span class="line"><span>	级联更新：on update cascade</span></span>
<span class="line"><span>	级联删除：on delete cascade</span></span></code></pre></div><h1 id="mysql约束-1" tabindex="-1">MySQL约束： <a class="header-anchor" href="#mysql约束-1" aria-label="Permalink to &quot;MySQL约束：&quot;">​</a></h1><h2 id="数据库设计" tabindex="-1">数据库设计： <a class="header-anchor" href="#数据库设计" aria-label="Permalink to &quot;数据库设计：&quot;">​</a></h2><h3 id="多表之间的关系" tabindex="-1">多表之间的关系： <a class="header-anchor" href="#多表之间的关系" aria-label="Permalink to &quot;多表之间的关系：&quot;">​</a></h3><h3 id="_1-分类" tabindex="-1">1，分类： <a class="header-anchor" href="#_1-分类" aria-label="Permalink to &quot;1，分类：&quot;">​</a></h3><h4 id="一对一-了解" tabindex="-1">一对一（了解） <a class="header-anchor" href="#一对一-了解" aria-label="Permalink to &quot;一对一（了解）&quot;">​</a></h4><p>​ 如：人和身份证 ​ 分析：一个人只能对应一个身份证，一个身份证只能对应一个人</p><h4 id="一对多-多对一" tabindex="-1">一对多（多对一） <a class="header-anchor" href="#一对多-多对一" aria-label="Permalink to &quot;一对多（多对一）&quot;">​</a></h4><p>​ 如：部门和员工 ​ 分析：一个部门可以有多个员工，一个员工只能对应一个部门</p><h4 id="多对多" tabindex="-1">多对多： <a class="header-anchor" href="#多对多" aria-label="Permalink to &quot;多对多：&quot;">​</a></h4><p>​ 如：学生和课程 ​ 分析：一个学生可以选择多个课程，一个课程可以被很多学生选择</p><h3 id="实现关系" tabindex="-1">实现关系： <a class="header-anchor" href="#实现关系" aria-label="Permalink to &quot;实现关系：&quot;">​</a></h3><h4 id="一对一-了解-1" tabindex="-1">一对一（了解） <a class="header-anchor" href="#一对一-了解-1" aria-label="Permalink to &quot;一对一（了解）&quot;">​</a></h4><p>​ 如：人和身份证 ​ 实现方式：可以在任意一方添加外键指向另一方的主键</p><h4 id="一对多-多对一-1" tabindex="-1">一对多（多对一） <a class="header-anchor" href="#一对多-多对一-1" aria-label="Permalink to &quot;一对多（多对一）&quot;">​</a></h4><p>​ 如：部门和员工 ​ 实现方式：在多的一方创建外键指向一的一方的主键</p><h4 id="多对多-1" tabindex="-1">多对多： <a class="header-anchor" href="#多对多-1" aria-label="Permalink to &quot;多对多：&quot;">​</a></h4><p>​ 如：学生和课程 ​ 实现关系：需要借助第三张中间表，中间表最小要包含2个字段，这两个字段作为第三张表的外键，分别指向两张表的主键</p><h2 id="数据库设计范式" tabindex="-1">数据库设计范式： <a class="header-anchor" href="#数据库设计范式" aria-label="Permalink to &quot;数据库设计范式：&quot;">​</a></h2><h3 id="概念-2" tabindex="-1">概念： <a class="header-anchor" href="#概念-2" aria-label="Permalink to &quot;概念：&quot;">​</a></h3><p>​ 设计数据库时，需要遵循的一些规范，要遵循后边的范式要求，首先要遵循前面的范式要求</p><h3 id="分类-1" tabindex="-1">分类： <a class="header-anchor" href="#分类-1" aria-label="Permalink to &quot;分类：&quot;">​</a></h3><h4 id="第一范式" tabindex="-1">第一范式： <a class="header-anchor" href="#第一范式" aria-label="Permalink to &quot;第一范式：&quot;">​</a></h4><p>​ 每一列都是不可分割的原子数据项</p><h4 id="第二范式" tabindex="-1">第二范式： <a class="header-anchor" href="#第二范式" aria-label="Permalink to &quot;第二范式：&quot;">​</a></h4><p>​ 在第一范式的基础上，非码属性必须完全依赖于码（消除非主属性对主码的部门函数依赖）</p><h5 id="几个概念" tabindex="-1">几个概念： <a class="header-anchor" href="#几个概念" aria-label="Permalink to &quot;几个概念：&quot;">​</a></h5><p>​ 函数依赖： A--B 如果通过A属性（属性组）的值可以确定唯一B属性的值，则称B依赖于A ​ 完全函数依赖：A--&gt;B 如果A是一个属性组，则B属性的值完全依赖于A属性组中所有的属性值 ​ 例如：根据（学号、课程名称）———&gt;分数</p><h5 id="部分函数依赖" tabindex="-1">部分函数依赖： <a class="header-anchor" href="#部分函数依赖" aria-label="Permalink to &quot;部分函数依赖：&quot;">​</a></h5><p>​ A--&gt;B 如果A是一个属性组，则B属性的值完全依赖于A属性组中某些属性值 ​ 例如：学号、课程名称 --&gt;姓名</p><h5 id="传递函数依赖" tabindex="-1">传递函数依赖： <a class="header-anchor" href="#传递函数依赖" aria-label="Permalink to &quot;传递函数依赖：&quot;">​</a></h5><p>​ A--&gt;B B--&gt;C 如果通过A属性（属性组）可以确定唯一B属性的值 ，再通过B属性（属性组） ​ 的值可以确定唯一C属性的值，则称C传递函数依赖于A</p><h5 id="码" tabindex="-1">码： <a class="header-anchor" href="#码" aria-label="Permalink to &quot;码：&quot;">​</a></h5><p>​ 如果在一张表中，一个属性或属性组，被其他所有属性所全部依赖，则称这个属性（属性组）为该表的码 ​ 例如：表中的码（学号+课程名称） ​ *主属性：码属性组中所有的属性 ​ *非主属性：除码属性组以外的属性</p><h4 id="第三范式" tabindex="-1">第三范式： <a class="header-anchor" href="#第三范式" aria-label="Permalink to &quot;第三范式：&quot;">​</a></h4><p>​ 在第二范式基础上，任何非主属性不依赖于其他非主属性</p><h1 id="mysql备份和还原" tabindex="-1">MySQL备份和还原： <a class="header-anchor" href="#mysql备份和还原" aria-label="Permalink to &quot;MySQL备份和还原：&quot;">​</a></h1><p>​ 使用鼠标操作</p><h1 id="mysql多表查询" tabindex="-1">MySQL多表查询： <a class="header-anchor" href="#mysql多表查询" aria-label="Permalink to &quot;MySQL多表查询：&quot;">​</a></h1><h2 id="多表查询" tabindex="-1">多表查询： <a class="header-anchor" href="#多表查询" aria-label="Permalink to &quot;多表查询：&quot;">​</a></h2><p>​ *select 字段名称 from 表名列表 where ...... ​ *笛卡尔积： ​ 有两个集合A、B，取这两个集合的所有情况 ​ 要完成多表查询，需要消除无用数据</p><h3 id="多表查询的分类" tabindex="-1">多表查询的分类： <a class="header-anchor" href="#多表查询的分类" aria-label="Permalink to &quot;多表查询的分类：&quot;">​</a></h3><h4 id="内连接查询" tabindex="-1">内连接查询: <a class="header-anchor" href="#内连接查询" aria-label="Permalink to &quot;内连接查询:&quot;">​</a></h4><h5 id="隐式内连接" tabindex="-1">隐式内连接： <a class="header-anchor" href="#隐式内连接" aria-label="Permalink to &quot;隐式内连接：&quot;">​</a></h5><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 使用where条件消除无用数据</span></span>
<span class="line"><span>	select * from 表1,表2 where 表1和表2之间的外键联系</span></span>
<span class="line"><span>-- 查询所有员工信息和对应的部门信息</span></span>
<span class="line"><span>	select * from emp,dept where emp.dept_id = dept.id;</span></span>
<span class="line"><span>-- 查询员工表的名称、性别。</span></span>
<span class="line"><span>	select emp.name,emp.gender,dept.name from emp,dept where emp.dept_id = dept.id;</span></span></code></pre></div><h5 id="显式内连接-建议" tabindex="-1">显式内连接：(建议) <a class="header-anchor" href="#显式内连接-建议" aria-label="Permalink to &quot;显式内连接：(建议)&quot;">​</a></h5><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 语法：</span></span>
<span class="line"><span>	select 字段列表 from 表名1 inner join 表名2 on 条件;</span></span>
<span class="line"><span>-- 查询所有员工信息和对应的部门信息</span></span>
<span class="line"><span>	select * from emp inner join dept on emp.dept_id = dept.id;</span></span>
<span class="line"><span>-- 查询员工表的名称、性别。</span></span>
<span class="line"><span>	SELECT emp.name,emp.gender,dept.name from emp inner join dept on emp.dept_id = dept.id;</span></span></code></pre></div><p>可以将inner join简写</p><h4 id="外连接查询" tabindex="-1">外连接查询: <a class="header-anchor" href="#外连接查询" aria-label="Permalink to &quot;外连接查询:&quot;">​</a></h4><h5 id="左外连接" tabindex="-1">左外连接： <a class="header-anchor" href="#左外连接" aria-label="Permalink to &quot;左外连接：&quot;">​</a></h5><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 语法：</span></span>
<span class="line"><span>	select 字段列表 from 表名称1 left [outer] join 表名称2 on 条件;</span></span>
<span class="line"><span>-- 查询所有员工信息和对应的部门信息</span></span>
<span class="line"><span>	select * from emp left join dept on emp.dept_id = dept.id;</span></span>
<span class="line"><span>-- 查询员工表的名称、性别。</span></span>
<span class="line"><span>	SELECT emp.name,emp.gender,dept.name from emp left [outer] join dept on emp.dept_id = dept.id;</span></span></code></pre></div><p>outer可以省略</p><h5 id="右外连接" tabindex="-1">右外连接： <a class="header-anchor" href="#右外连接" aria-label="Permalink to &quot;右外连接：&quot;">​</a></h5><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 语法：</span></span>
<span class="line"><span>	select 字段列表 from 表名称1 right [outer] join 表名称2 on 条件;</span></span>
<span class="line"><span>-- 查询所有员工信息和对应的部门信息</span></span>
<span class="line"><span>	select * from emp right join dept on emp.dept_id = dept.id;</span></span>
<span class="line"><span>-- 查询员工表的名称、性别。</span></span>
<span class="line"><span>	SELECT emp.name,emp.gender,dept.name from emp right [outer] join dept on emp.dept_id = dept.id;</span></span></code></pre></div><p>outer可以省略</p><h4 id="子查询" tabindex="-1">子查询: <a class="header-anchor" href="#子查询" aria-label="Permalink to &quot;子查询:&quot;">​</a></h4><h5 id="概念-3" tabindex="-1">概念： <a class="header-anchor" href="#概念-3" aria-label="Permalink to &quot;概念：&quot;">​</a></h5><p>查询中嵌套查询，称嵌套查询为子查询</p><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 查询工资最高的员工信息：</span></span>
<span class="line"><span>select MAX(salary) from emp;</span></span>
<span class="line"><span>select * from emp where salary = 9000;</span></span></code></pre></div><p>使用子查询：select * from emp where salary = (select max(salary) from emp);</p><h5 id="子查询的不同情况" tabindex="-1">#子查询的不同情况： <a class="header-anchor" href="#子查询的不同情况" aria-label="Permalink to &quot;#子查询的不同情况：&quot;">​</a></h5><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 子查询的结果是单行单列的</span></span>
<span class="line"><span>-- 子查询可以作为条件，使用运算符去判断。运算符：&gt; &gt;= &lt; &lt;= = </span></span>
<span class="line"><span>-- 查询员工工资小于平均工资的人：</span></span>
<span class="line"><span>	select * from emp where salary &lt; (SELECT avg(salary) from emp);</span></span></code></pre></div><h5 id="子查询的结果是多行单列" tabindex="-1">子查询的结果是多行单列： <a class="header-anchor" href="#子查询的结果是多行单列" aria-label="Permalink to &quot;子查询的结果是多行单列：&quot;">​</a></h5><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 子查询可以作为条件，使用运算符in来判断</span></span>
<span class="line"><span>-- 查询财务部和市场部所有的员工信息：</span></span>
<span class="line"><span>-- 查询市场部和财务部的id</span></span>
<span class="line"><span>	select id from dept where name=&#39;市场部&#39; or name =&#39;财务部&#39;; </span></span>
<span class="line"><span>--根据id找到对应的员工信息</span></span>
<span class="line"><span>	SELECT * from emp where dept_id=2 or dept_id =3;  </span></span>
<span class="line"><span>-- 使用子查询：</span></span>
<span class="line"><span>	select * from emp where dept_id in (select id from dept where name=&#39;市场部&#39; or name =&#39;财务部&#39;);</span></span></code></pre></div><h5 id="子查询的结果是多行多列的" tabindex="-1">子查询的结果是多行多列的： <a class="header-anchor" href="#子查询的结果是多行多列的" aria-label="Permalink to &quot;子查询的结果是多行多列的：&quot;">​</a></h5><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 子查询的结果可以作为一张虚拟的表参与查询</span></span>
<span class="line"><span>-- 插叙员工入职日期是2011-11-11日之后的员工信息和部门信息</span></span>
<span class="line"><span>select * from emp where join_date &gt; &#39;2011-11-11&#39;;</span></span>
<span class="line"><span>select * from dept t1,(select * from emp where join_date &gt; &#39;2011-11-11&#39;) t2 where t1.id  = t2.dept_id;(建议)</span></span>
<span class="line"><span>-- 普通内连接查询：</span></span>
<span class="line"><span>select * from emp t1,dept t2 where  t2.id  = t1.dept_id and t1.join_dateb &gt; &#39;2011-11-11&#39;;</span></span></code></pre></div><h1 id="mysql事务" tabindex="-1">MySQL事务： <a class="header-anchor" href="#mysql事务" aria-label="Permalink to &quot;MySQL事务：&quot;">​</a></h1><h3 id="事务的基本介绍" tabindex="-1">事务的基本介绍 <a class="header-anchor" href="#事务的基本介绍" aria-label="Permalink to &quot;事务的基本介绍&quot;">​</a></h3><h4 id="概念-4" tabindex="-1">概念： <a class="header-anchor" href="#概念-4" aria-label="Permalink to &quot;概念：&quot;">​</a></h4><p>​ 如果一个包含多个步骤的业务操作，被事务管理，那么这些操作要么同时成功，要么同时失败</p><h4 id="操作" tabindex="-1">操作： <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 开启事务  </span></span>
<span class="line"><span>	start transaction;</span></span>
<span class="line"><span>	-- 另一个关键字</span></span>
<span class="line"><span>		begin;</span></span>
<span class="line"><span>-- 回滚： </span></span>
<span class="line"><span>	rollback；</span></span>
<span class="line"><span>-- 提交： </span></span>
<span class="line"><span>	commit;</span></span>
<span class="line"><span>    -- 设置是否自动提交</span></span>
<span class="line"><span>        set @@autocommit = 0;-- 不自动提交</span></span>
<span class="line"><span>        set @@autocommit = 1;-- 自动提交</span></span></code></pre></div><h4 id="例子" tabindex="-1">例子： <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子：&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>create table zhanghu(</span></span>
<span class="line"><span>	id int primary key auto_increment,</span></span>
<span class="line"><span>	name varchar(20),</span></span>
<span class="line"><span>	money double</span></span>
<span class="line"><span>);</span></span></code></pre></div><h4 id="mysql数据库中事务默认自动提交" tabindex="-1">mysql数据库中事务默认自动提交 <a class="header-anchor" href="#mysql数据库中事务默认自动提交" aria-label="Permalink to &quot;mysql数据库中事务默认自动提交&quot;">​</a></h4><div class="language-mysql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mysql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 事务提交的两种方式：</span></span>
<span class="line"><span>-- 自动提交</span></span>
<span class="line"><span>	-- 1，mysql就是自动提交的</span></span>
<span class="line"><span>	-- 2，一条DML(增删改)语句会自动提交一次事务</span></span>
<span class="line"><span>-- 动提交：</span></span>
<span class="line"><span>	-- 1，Oracle数据库默认就是手动提交事务</span></span>
<span class="line"><span>	-- 2，需要先开启事务，再提交</span></span>
<span class="line"><span>-- 修改事务的默认提交方式：</span></span>
<span class="line"><span>	-- 查看事务的默认提交方式：select @@autocommit;  --1代表自动提交  -- 0 代表手动提交</span></span>
<span class="line"><span>	-- 修改事务的默认提交方式：set @@autocommit = 0;</span></span></code></pre></div><h4 id="事务的四大特征" tabindex="-1">事务的四大特征： <a class="header-anchor" href="#事务的四大特征" aria-label="Permalink to &quot;事务的四大特征：&quot;">​</a></h4><p>​ 1，原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败 ​ 2，持久性：当事务提交或者回滚后，数据库会持久化的保持数据 ​ 3，隔离性：多个事务之间相互独立 ​ 4，一致性：事务操作前后，数据总量不变</p><h4 id="事务的隔离级别-了解" tabindex="-1">事务的隔离级别（了解） <a class="header-anchor" href="#事务的隔离级别-了解" aria-label="Permalink to &quot;事务的隔离级别（了解）&quot;">​</a></h4><p>概念：多个事务之间是隔离的，相互独立的，如果多个事务操作一批数据，则会引发一些问题，设置不同的隔离级别就可以解决这些问题</p><ol><li>存在问题： <ol><li>脏读：一个事务读取到另一个事务中没有提交的数据</li><li>不可重复读（虚读）：在同一个事务中，两次读取到的数据不一样</li><li>幻读：一个事务操作（DML）数据表中所有记录，另一个事务添加了一条数据，则第一个事务查询不到自己的修改</li></ol></li><li>隔离级别： <ol><li>读未提交：read uncommitted</li><li>*产生的问题:脏读 不可重复读 幻读</li><li>read committed:读已提交</li><li>*产生的问题：不可重复读 幻读</li><li>可重复读：repeatable read</li><li>*产生的问题：幻读</li><li>serializable :串行化</li><li>*可以解决所有问题</li><li>注意：隔离级别从小到大，安全性越来越高，但是效率越来越低</li></ol></li></ol><p>​</p><h1 id="mysql中的dcl" tabindex="-1">MySQL中的DCL： <a class="header-anchor" href="#mysql中的dcl" aria-label="Permalink to &quot;MySQL中的DCL：&quot;">​</a></h1><h3 id="sql分类-1" tabindex="-1">sql分类： <a class="header-anchor" href="#sql分类-1" aria-label="Permalink to &quot;sql分类：&quot;">​</a></h3><p>​ 1，DDL 2，DML 3，DQL 3，DCL</p><h3 id="dba-数据库管理员" tabindex="-1">DBA:数据库管理员 <a class="header-anchor" href="#dba-数据库管理员" aria-label="Permalink to &quot;DBA:数据库管理员&quot;">​</a></h3><h4 id="dcl-管理用户-授权" tabindex="-1">DCL:管理用户，授权 <a class="header-anchor" href="#dcl-管理用户-授权" aria-label="Permalink to &quot;DCL:管理用户，授权&quot;">​</a></h4><h5 id="_1-管理用户" tabindex="-1">1，管理用户： <a class="header-anchor" href="#_1-管理用户" aria-label="Permalink to &quot;1，管理用户：&quot;">​</a></h5><h5 id="_1-添加用户" tabindex="-1">1，添加用户 <a class="header-anchor" href="#_1-添加用户" aria-label="Permalink to &quot;1，添加用户&quot;">​</a></h5><p>​ *语法：create user &#39;用户名&#39;@&#39;主机名&#39; IDENTIFIED by &#39;密码&#39;;</p><h5 id="_2-删除用户" tabindex="-1">2，删除用户 <a class="header-anchor" href="#_2-删除用户" aria-label="Permalink to &quot;2，删除用户&quot;">​</a></h5><p>​ *语法：drop user &#39;用户名&#39;@&#39;主机名&#39;;</p><h5 id="_3-修改用户密码" tabindex="-1">3，修改用户密码 <a class="header-anchor" href="#_3-修改用户密码" aria-label="Permalink to &quot;3，修改用户密码&quot;">​</a></h5><p>​ *语法：update user set password= password(&#39;新密码&#39;) where name = &#39;用户名&#39;;</p><h5 id="_4-查询用户" tabindex="-1">4，查询用户 <a class="header-anchor" href="#_4-查询用户" aria-label="Permalink to &quot;4，查询用户&quot;">​</a></h5><p>​ -- &gt; 切换到mysql数据库 ​ use mysql; ​ -- &gt;查询user表 ​ select * from user; ​ 通配符：% 表示可以在任意主机使用用户登陆数据库</p>`,215),i=[p];function t(c,o,r,h,d,u){return n(),s("div",null,i)}const g=a(l,[["render",t]]);export{b as __pageData,g as default};
