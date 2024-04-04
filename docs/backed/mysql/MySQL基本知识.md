# 数据库基本概念：

#### 	**1，数据库的英文单词：database 简称：DB**

#### 	**2，什么是数据库：用于存储和管理数据的仓库。**

#### 	**3，数据库的特点：**

​					1，持久化存储数据的。其实数据库就是一个文件系统
​		            2，方便存储和管理数据
​		            3，使用了统一的方式操作数据库 ——SQL

#### 	4,常见的数据库软件：mysql  oracle

​				![图片3]()

#### MySQL数据库软件：

​	1，安装
​	     1，详见图片
​	2，卸载（如果提前设置了服务自动启动要先停止服务）
​	     1，去mysql的安装目录下找到my.ini文件并复制：
​		datadir="C:/ProgramData/MySQL/MySQL Server 5.5/Data/"
​	     2，卸载mysql (找到控制面板——卸载程序——mysql)
​	     3,删除C:/ProgramData目录下的MySQL文件夹
​	     4，删除注册表
​	3，配置
​	    详见图片


# 数据库基本概念：

- ### mysql服务启动

  - 手动

  - cmd-->services.msc:启动mysql服务
  - net stop mysql -->停止服务

  - net start mysql -->启动服务

- ### mysql登陆：

  - mysql -uroot -proot (mysql -uroot -p回车 输入密码)

  - mysql -hip -uroot -p连接目标的密码（127.0.0.1代表本机的ip）

  - mysql --host=ip --user=root --password=连接目标的密码

- ### mysql退出：

  - 1,直接关闭doc窗口
  - exit
  - quit


  # 数据库基本概念：

## SQL:

#### 什么是SQL?

- 结构化查询语言。
- 其实就是定义操作所有关系型数据库的一种规则，每一种数据库操作的方式存在不一样的地方，我们成为方言。

#### SQL通用语法

- sql语句可以单行或多行书写，以分号结尾
- 可使用空格和缩进来增强语句的可读性
- mysql数据库的sql语句不区分大小写 建议用大写

#### 三种注释：

- 单行注释：-- 注释内容 或 # 注释内容（mysql特有）
- 多行注释：/* 注释*/

#### SQL分类：

- DDL(操作数据库和表)

- DML(操作（增删改）表中的数据)

- DQL（查询表中的数据）

- DCL（用来定义数据库的访问权限和安全级别）

## DDL:操作数据库和表：

### 操作数据库：

#### 创建：

```mysql
-- 创建数据库
create database 数据库名称；
-- 创建数据库，判断存不存在，如果不存在，才创建
create database if not exists 数据库名称；
-- 创建数据库，并指定字符集
create database 数据库名称 character set 字符集名；
```

#### 查询：

```mysql
-- 查询所有数据库的名称
show databases;
-- 查询某个数据库的字符集，查询某个数据库的创建语句
show create database 数据库名称；
-- 练习：创建db3数据库，判断是否存在，并指定字符集是gbk.
```

#### 修改：

```MySQL
-- 修改数据库编码格式
alter database 数据库名称 character set 新编码格式;
```

#### 删除：

```mysql
-- 删除数据库
drop database 数据库名称;
-- 删除数据库判断是否存在
drop database if exists 数据库名称;
```

#### 使用数据库：

```mysql
-- 显示正在使用的数据库
select database();
-- 进入某个数据库
use 数据库名称;
```

### 操作表：

#### 创建

```mysql
语法：create table 表名（
  列名1 数据类型1，
  列名2 数据类型2，
  列名3 数据类型3，
  ......
）;
```

注意：最后一列不需要加逗号。

- ##### 数据类型：

  - int：整数类型

    - unsigned:无符号 只能是正数 不能存负数。


  - double（M，D）:小数类型

    - float(M,D):其中M表示小数总的位数，D表示小数点后保留的位数

    -  decimal(M,D):其中M表示小数总的位数，D表示小数点后保留的位数


  - ****区别**：**
    - 所占空间不一样，float只占4个字节空间，decimal占8个字节空间
    
    - 精度不一样，decimal精度要高于float，建议个金钱相关的使用decimal
    
- ,data:日期：只包含年月日 yyyy-MM-dd

- datatime:日期：包含年月日 时分秒  yyyy-MM-dd HH:mm:ss

- ****timestamp:时间戳   包含年月日 时分秒  yyyy-MM-dd HH:mm:ss
  
  - 如果咱们不给这个字段赋值，那么系统会自动给赋值当前系统时间
  
- varchar  字符串

- char（5）:固定长度（范围0~255）

- varchar（20）:可变的长度 （范围0~21845）

- text:大文本

- 应用场景：

  - char：手机号码、四字成语。。。

  - varchar: 姓名 简介。。。

  - text：大文本 论文。。。

- **枚举**

  - 类似于表单中的单选  男 女 保密

  - 语法：列名 enum('男','女',''保密')；

  - 插入数据的时候，只能插入我列举出的某一项。

- **集合**
  - 集合类型 类似于表单中的多选

  - 语法：列名 set('篮球','足球','乒乓球')；

  - 插入数据的时候 可以插入我提供的多个选型	

    ```mysql
    -- 创建表：
    create table student(
    	id int,
    	name varchar(20),
    	gender char(2),
    	age int unsigned,
    	money double(6,2),
    	date timestamp,
    	home varchar(100)
    );
    ```

#### 查询

```mysql
-- 查询某个数据库所有表的名称
 	show tables;
-- 查询表的结构
 	desc 表名；
```

#### 修改

```mysql
-- 修改表名
alter table 表名 rename to 新的表名;
-- 修改表的字符集
alter table 表名 character set 字符集名称;
-- 添加一列
alter table 表名 add 列名 数据类型；
-- 修改类的名称 类型
alter table 表名 change 列名 新列名 新数据类型；
alter table 表名 modify 列名 新数据类型；
-- 删除列
alter table 表名 drop 列名；
```



#### 删除

```mysql
-- 删除表
drop table 表名;
-- 删除表，先判断存不存在
drop table if exists 表名；
```



## DML操作数据：

#### 添加数据：

- 语法：

  - ```mysql
    -- 添加数据
    insert into 表名 set 列1 = 值1,列2 = 值2 ... where 判断条件;
    ```

- 注意事项

  1. 列名要和值一一对应。
  2. 如果表名后不加列名，则默认给所有列添加值。insert into 表名 values (值1，值2...);
  3. 除了数字类型，其他类型需要引号包起来

#### 删除数据：

- 语法：

  - ```MySQL
    delete from 表名 [where 条件]；
    ```

- 注意：

  1. 如果不加条件，则删除表中所有记录

- 补充：

  - ```MySQL
    delete from 表名;-- 不建议使用，有多少条语句就执行多少次操作
    truncate table 表名; -- 推荐使用 只执行一次 效率高
    ```

#### 修改数据：

- 语法：

  - ```MySQL
    update 表名 set 列名1 = 值1,列名2 = 值2,... [where 条件];
    ```

- 注意：

  - 如果不加任何条件，则将表中的数据全部更改。

  # 数据库DDL：

## 操作数据库：

#### 创建：

```mysql
-- 创建数据库
create database 数据库名称；
-- 创建数据库，判断存不存在，如果不存在，才创建
create database if not exists 数据库名称；
-- 创建数据库，并指定字符集
create database 数据库名称 character set 字符集名；
```

#### 查询：

```mysql
-- 查询所有数据库的名称
show databases;
-- 查询某个数据库的字符集，查询某个数据库的创建语句
show create database 数据库名称；
-- 练习：创建db3数据库，判断是否存在，并指定字符集是gbk.
```

#### 修改：

```MySQL
-- 修改数据库编码格式
alter database 数据库名称 character set 新编码格式;
```

#### 删除：

```mysql
-- 删除数据库
drop database 数据库名称;
-- 删除数据库判断是否存在
drop database if exists 数据库名称;
```

#### 使用数据库：

```mysql
-- 显示正在使用的数据库
select database();
-- 进入某个数据库
use 数据库名称;
```

## 操作表：

#### 创建

```mysql
语法：create table 表名（
  列名1 数据类型1，
  列名2 数据类型2，
  列名3 数据类型3，
  ......
）;
```

注意：最后一列不需要加逗号。

## 数据类型：

- int：整数类型

  - unsigned:无符号 只能是正数 不能存负数。


  - double（M，D）:小数类型

    - float(M,D):其中M表示小数总的位数，D表示小数点后保留的位数

    -  decimal(M,D):其中M表示小数总的位数，D表示小数点后保留的位数


  - ****区别**：**
    - 所占空间不一样，float只占4个字节空间，decimal占8个字节空间
    
    - 精度不一样，decimal精度要高于float，建议个金钱相关的使用decimal
    
- ,data:日期：只包含年月日 yyyy-MM-dd

- datatime:日期：包含年月日 时分秒  yyyy-MM-dd HH:mm:ss

- ****timestamp:时间戳   包含年月日 时分秒  yyyy-MM-dd HH:mm:ss
  
  - 如果咱们不给这个字段赋值，那么系统会自动给赋值当前系统时间
  
- varchar  字符串

- char（5）:固定长度（范围0~255）

- varchar（20）:可变的长度 （范围0~21845）

- text:大文本

- 应用场景：

  - char：手机号码、四字成语。。。

  - varchar: 姓名 简介。。。

  - text：大文本 论文。。。

- **枚举**

  - 类似于表单中的单选  男 女 保密

  - 语法：列名 enum('男','女',''保密')；

  - 插入数据的时候，只能插入我列举出的某一项。

- **集合**
  - 集合类型 类似于表单中的多选

  - 语法：列名 set('篮球','足球','乒乓球')；

  - 插入数据的时候 可以插入我提供的多个选型	

    ```mysql
    -- 创建表：
    create table student(
    	id int,
    	name varchar(20),
    	gender char(2),
    	age int unsigned,
    	money double(6,2),
    	date timestamp,
    	home varchar(100)
    );
    ```

#### 查询

```mysql
-- 查询某个数据库所有表的名称
 	show tables;
-- 查询表的结构
 	desc 表名；
```

#### 修改

```mysql
-- 修改表名
alter table 表名 rename to 新的表名;
-- 修改表的字符集
alter table 表名 character set 字符集名称;
-- 添加一列
alter table 表名 add 列名 数据类型；
-- 修改类的名称 类型
alter table 表名 change 列名 新列名 新数据类型；
alter table 表名 modify 列名 新数据类型；
-- 删除列
alter table 表名 drop 列名；
```

#### 删除

```mysql
-- 删除表
drop table 表名;
-- 删除表，先判断存不存在
drop table if exists 表名；
```

# 数据库基本概念DML：

#### 添加数据：

- 语法：

  - ```mysql
    -- 添加数据
    insert into 表名 set 列1 = 值1,列2 = 值2 ... where 判断条件;
    ```

- 注意事项

  1. 列名要和值一一对应。
  2. 如果表名后不加列名，则默认给所有列添加值。insert into 表名 values (值1，值2...);
  3. 除了数字类型，其他类型需要引号包起来

#### 删除数据：

- 语法：

  - ```MySQL
    delete from 表名 [where 条件]；
    ```

- 注意：

  1. 如果不加条件，则删除表中所有记录

- 补充：

  - ```MySQL
    delete from 表名;-- 不建议使用，有多少条语句就执行多少次操作
    truncate table 表名; -- 推荐使用 只执行一次 效率高
    ```

#### 修改数据：

- 语法：

  - ```MySQL
    update 表名 set 列名1 = 值1,列名2 = 值2,... [where 条件];
    ```

- 注意：

  - 如果不加任何条件，则将表中的数据全部更改。

**补充：如果某个记录字段上面没有数据，想要添加数据，不要能使用insert into只能使用update修改数据** 

​			  **非常重要！！！**

​			  **非常重要！！！**

​			  **非常重要！！！**

# 数据库DQL查询：

## 普通查询基础:

- ```MySQL
  -- 普通查询基础
  select * from 表名;
  语法：
  	select 
  		字段列表
  	from
  		表名列表
  	where
  		条件列表
  	group by
  		分组字段
  	having
  		分组之后的条件
  	order by
  		排序
  	limit
  		分页限定
  ```


## 基础查询：

- ```MySQL
  
  -- 1，多个字段的查询
  	
  	SELECT 标识选择哪些列
  	FROM 标识从哪个表中选择
  	
  	select 字段名1,字段名2,... from 表名；
  	如果需要展示所有字段，可以用*来代替：
  	select * from 表名;
  -- 2，去除重复
  	* distinct
  	SELECT DISTINCT 列名 from 表名;
  -- 3,计算列
  	* 一般可以使用四则运算计算一些列的值，（一般只会进行数值类型的运算）
  	ifnull(表达式1,表达式2) null参与的运算，计算结果都是null
  		表达式1：代表哪个字段需要判断是否为null
  		表达式2：如果该字段为null后需要替换的值
  -- 4，起别名：
  	* as 别名； -- as可以省略
  ```


## 条件查询：

- **where字句后跟条件**

- **运算符**：

  - ```mysql
    > < >= <= = <>
    between...and （在什么什么之间）
    in (集合)
    like(模糊查询)
    _:单个任意字符
    %：多个任意字符
    is null 
    and 或 &&
    or 或 ||
    not 或 ！
    ```
  
  
    - ```mysql
      -- 查询年龄大于20岁
          SELECT * from student where age>20;
      -- 查询年龄大于等于20岁
          SELECT * from student where age >= 20;
      -- 查询年龄等于20岁
          SELECT * from student where age = 20;
      -- 查询年龄大于等于20，小于等于30的人
          SELECT * from student where age>=20 && age<=30; -- 不建议用
          SELECT * from student where age>=20 AND age<=30;  --不建议用
          SELECT * FROM student WHERE age BETWEEN 20 AND 30;  -- 建议用
      -- 查询年龄是 18 22 25 的人
          select * from student where age=18 || age=22 || age=25; -- 不建议用
          select * from student where age=18 OR age=22 OR age=25; -- 不建议用
          select * from student where age in (18,22,25); -- 建议用
      -- 查询英语成绩为null的人
          select * from student where english is null;
      -- 查询英语成绩不为null的人
      ```
  


## 排序查询：

- ```mysql
  -- 语法：order by 字句
  order by 排序字段1 排序方式1,排序字段2 排序方式2...
  -- 排序方式： 1升序 asc 默认  2  降序 desc 
  注意：
  -- 如果有多个排序字段，当前面的值一样的时候，才会判断第二条件
  -- 以数学成绩排序 从低到高：
  	select * from student ORDER BY math;  -- 默认升序 asc
  -- 以数学成绩排序 从高到低：
  	select * from student ORDER BY math DESC;
  -- 以数学成绩排序 从高到低，如果数学成绩相同，那么以英语排名，从低到高
  	select * from student ORDER BY math DESC, english ASC;
  ```

## 聚合函数：

- ```MySQL
  将一列的数据作为一个整体，进行纵向的计算  count(*)
  1，count:计算个数
  	一般选择非空的列  主键
  	例如：select count(id) from student;
  2，max:计算最大值
  	例如：select MAX(math) from student;
  3，min:计算最小值
  	例如：select min(math) from student;
  4，sum：计算和
  	例如：select SUM(math) from student;
  5，avg：计算平均值
  	例如：select avg(math) from student;
  		
  注意：聚合函数的计算排除了null值
  解决方案：
  1，选择不包含null值的列
  2，ifnull函数
  ```

## 分组查询：

- ```MySQL
  分组查询：
  1，语法：group by 分组的字段
  		注意：分组之后查询的字段：分组的字段或者聚合函数
  2，where和having有什么区别：
  	1，where在分组之前进行限定，如果不满足条件，不参与分组。having在分组之后进行限定，如果不满足结果，则不会被查询出来
  	2，where之后不可以跟聚合函数，having可以进行聚合函数的判断
  -- 根据性别分组，分别查询男女同学的平均分
  	select sex,avg(math) from student GROUP BY sex;
  -- 按照性别分组，分别查询男女同学的平均分 、人数
  	select sex,avg(math),COUNT(id) from student GROUP BY sex;
  -- 按照性别分组，分别查询男女同学的平均分 、人数 要求：低于70的人不参与分组
  	select sex,avg(math),COUNT(id) from student WHERE math > 70 GROUP BY sex;
  -- 按照性别分组，分别查询男女同学的平均分 、人数 要求：低于70的人不参与分组 分组之后，人数大于2人
  	select sex,avg(math),COUNT(id) from student WHERE math > 70 GROUP BY sex HAVING COUNT(id)>2;
  -- 起别名：
  	select sex,avg(math),COUNT(id) 人数 from student WHERE math > 70 GROUP BY sex HAVING 人数>2;
  ```


## 分页查询：

- ```MySQL
  -- 语法：limit 开始的索引,每页查询的条数
  -- 公式：开始的索引 = （当前的页码-1）*每页显示的条数
  -- 每页展示3条数据
  select * from student LIMIT 0,3; -- 第1页 （1-1）*3 = 0
  select * from student LIMIT 3,3; -- 第2页 （2-1）*3 = 3
  select * from student LIMIT 6,3; -- 第3页 （3-1）*3 = 6
  -- 注意：limit 是mysql的一个 方言
  ```


# MySQL约束：

## 	概念：

​			**对表中的数据进行限定，保证谁数据的正确性，有效性和完整性**

## 	分类：

```mysql
主键约束 primary key
非空约束 not null
唯一约束 unique
外键约束 foreign key
自动生长 auto_increment
```



## 非空约束 not null：

```mysql
-- not null  某一列的值不能为空（null）
-- 创建表的时候添加约束：
	create table stu1(
		id int,
		name varchar(20) not null	
	);
-- 删除非空约束：
	alter table stu1 modify name varchar(20);
-- 创建完表之后添加约束：
	alter table stu1 modify name varchar(20) not null;
```

## 唯一约束 unique：

```MySQL
-- unique 唯一约束 某一字段数据不能出现一样的数据
-- 创建表的时候添加唯一约束
    create table stu2(
        id int,
        phone_number varchar(20) unique
    );

-- 删除约束 不能使用修改数据类型来删除，只能使用特定的
	-- 语法：alter table 表名 drop index 字段名;
	alter table stu2 drop index phone_number;
	
-- 创建玩表之后添加约束
	-- 语法：alter table 表名 modify 字段名 数据类型 约束;
	alter table stu2 modify phone_number varchar(20) unique;
```

## 主键约束primary key：

### 注意：

1. 含义：非空且唯一
2. 一张表只能有一个字段为主键
3. 主键就是表中记录的唯一标识

```MySQL
-- 创建表时添加主键约束：
	create table stu3(
		id int primary key,
		name varchar(20)
	);
-- 删除主键：
	alter table stu3 drop primary key;
	alter table stu3 MODIFY id int;
-- 创建完表之后添加主键：
	alter table stu3 modify id int primary key;
```

## 自动生长auto_increment：

```mysql
-- 概念：如果某一列是数值类型的，使用auto_increment可以完成值自动增长（+1）
-- 在创建表的时候添加自动增长：
	create table stu4(
		id int primary key auto_increment,
		name varchar(20)
	);
-- 删除自动增长：
	alter table stu4 modify id int;
-- 创建完表，添加自动增长：
	alter table stu4 modify id int auto_increment;
```

## 外键约束foreign key：

### 概念：

​				在从表中与主表主键对应的那一列就是外键主表：一的一方    从表：多的一方

```mysql
-- 创建完表后添加外键约束：
	alter table 表名 add CONSTRAINT 外键名称 foreign key 从表名称(从表字段名称) references 主表名称(主表列名称);
	例如：alter table emp add CONSTRAINT aaa FOREIGN KEY dept(dept_id) REFERENCES tept(id);
-- 在创建表的同时添加外键约束：
	create table 表名(
		id int PRIMARY KEY auto_increment,
		name VARCHAR(20),
		age int UNSIGNED,
		dept_id int,
		CONSTRAINT 外键名称 foreign key (外键字段名称) references 主表名称(主表列名称);
	);
-- 删除外键：
	alter table 表名 drop foreign key 外键名称;
	例如：alter table emp drop foreign key aaa;
```

### 级联操作：

```MySQL
语法：
	alter table 表名 add CONSTRAINT 外键名称 foreign key (外键字段名称) references 主表名称(主表列名称) on update cascade;
分类：
	级联更新：on update cascade
	级联删除：on delete cascade
```

# MySQL约束：

## 数据库设计：

### 多表之间的关系：

### 		1，分类：

#### 				一对一（了解）

​						如：人和身份证
​						分析：一个人只能对应一个身份证，一个身份证只能对应一个人

#### 				一对多（多对一）

​						如：部门和员工
​						分析：一个部门可以有多个员工，一个员工只能对应一个部门

#### 				多对多：

​						如：学生和课程
​						分析：一个学生可以选择多个课程，一个课程可以被很多学生选择

### 		实现关系：

#### 				一对一（了解）

​						如：人和身份证
​						实现方式：可以在任意一方添加外键指向另一方的主键

#### 				一对多（多对一）

​						如：部门和员工
​						实现方式：在多的一方创建外键指向一的一方的主键

#### 				多对多：

​						如：学生和课程
​						实现关系：需要借助第三张中间表，中间表最小要包含2个字段，这两个字段作为第三张表的外键，分别指向两张表的主键

## 数据库设计范式：

### 	概念：

​			设计数据库时，需要遵循的一些规范，要遵循后边的范式要求，首先要遵循前面的范式要求

### 	分类：

#### 			第一范式：

​					每一列都是不可分割的原子数据项

#### 			第二范式：

​					在第一范式的基础上，非码属性必须完全依赖于码（消除非主属性对主码的部门函数依赖）

##### 						几个概念：

​									函数依赖：  A--B 如果通过A属性（属性组）的值可以确定唯一B属性的值，则称B依赖于A
​									完全函数依赖：A-->B 如果A是一个属性组，则B属性的值完全依赖于A属性组中所有的属性值
​									例如：根据（学号、课程名称）———>分数  

##### 						部分函数依赖：

​								A-->B   如果A是一个属性组，则B属性的值完全依赖于A属性组中某些属性值
​								例如：学号、课程名称  -->姓名

##### 						传递函数依赖： 

​								 A-->B  B-->C  如果通过A属性（属性组）可以确定唯一B属性的值 ，再通过B属性（属性组）
​								 的值可以确定唯一C属性的值，则称C传递函数依赖于A

##### 						码：

​								如果在一张表中，一个属性或属性组，被其他所有属性所全部依赖，则称这个属性（属性组）为该表的码
​								例如：表中的码（学号+课程名称）
​			 					*主属性：码属性组中所有的属性
​								*非主属性：除码属性组以外的属性

#### 			第三范式：

​						在第二范式基础上，任何非主属性不依赖于其他非主属性


# MySQL备份和还原：

​	使用鼠标操作


# MySQL多表查询：

## 多表查询：

​		*select 字段名称 from 表名列表 where ......
​		*笛卡尔积：
​			有两个集合A、B，取这两个集合的所有情况
​			要完成多表查询，需要消除无用数据

### 多表查询的分类：

#### 内连接查询:

##### 隐式内连接：

```mysql
-- 使用where条件消除无用数据
	select * from 表1,表2 where 表1和表2之间的外键联系
-- 查询所有员工信息和对应的部门信息
	select * from emp,dept where emp.dept_id = dept.id;
-- 查询员工表的名称、性别。
	select emp.name,emp.gender,dept.name from emp,dept where emp.dept_id = dept.id;
```

##### 显式内连接：(建议)

```mysql
-- 语法：
	select 字段列表 from 表名1 inner join 表名2 on 条件;
-- 查询所有员工信息和对应的部门信息
	select * from emp inner join dept on emp.dept_id = dept.id;
-- 查询员工表的名称、性别。
	SELECT emp.name,emp.gender,dept.name from emp inner join dept on emp.dept_id = dept.id;
```

可以将inner join简写 

#### 外连接查询:

##### 左外连接：

```mysql
-- 语法：
	select 字段列表 from 表名称1 left [outer] join 表名称2 on 条件;
-- 查询所有员工信息和对应的部门信息
	select * from emp left join dept on emp.dept_id = dept.id;
-- 查询员工表的名称、性别。
	SELECT emp.name,emp.gender,dept.name from emp left [outer] join dept on emp.dept_id = dept.id;
```

outer可以省略

##### 右外连接：

```mysql
-- 语法：
	select 字段列表 from 表名称1 right [outer] join 表名称2 on 条件;
-- 查询所有员工信息和对应的部门信息
	select * from emp right join dept on emp.dept_id = dept.id;
-- 查询员工表的名称、性别。
	SELECT emp.name,emp.gender,dept.name from emp right [outer] join dept on emp.dept_id = dept.id;
```

outer可以省略

#### 子查询:

##### 概念：

查询中嵌套查询，称嵌套查询为子查询

```mysql
-- 查询工资最高的员工信息：
select MAX(salary) from emp;
select * from emp where salary = 9000;
```

使用子查询：select * from emp where salary = (select max(salary) from emp);

##### #子查询的不同情况：

```mysql
-- 子查询的结果是单行单列的
-- 子查询可以作为条件，使用运算符去判断。运算符：> >= < <= = 
-- 查询员工工资小于平均工资的人：
	select * from emp where salary < (SELECT avg(salary) from emp);
```

##### 子查询的结果是多行单列：

```mysql
-- 子查询可以作为条件，使用运算符in来判断
-- 查询财务部和市场部所有的员工信息：
-- 查询市场部和财务部的id
	select id from dept where name='市场部' or name ='财务部'; 
--根据id找到对应的员工信息
	SELECT * from emp where dept_id=2 or dept_id =3;  
-- 使用子查询：
	select * from emp where dept_id in (select id from dept where name='市场部' or name ='财务部');
```

##### 子查询的结果是多行多列的：

```mysql
-- 子查询的结果可以作为一张虚拟的表参与查询
-- 插叙员工入职日期是2011-11-11日之后的员工信息和部门信息
select * from emp where join_date > '2011-11-11';
select * from dept t1,(select * from emp where join_date > '2011-11-11') t2 where t1.id  = t2.dept_id;(建议)
-- 普通内连接查询：
select * from emp t1,dept t2 where  t2.id  = t1.dept_id and t1.join_dateb > '2011-11-11';
```


# MySQL事务：

### 事务的基本介绍

#### 概念：

​	如果一个包含多个步骤的业务操作，被事务管理，那么这些操作要么同时成功，要么同时失败

#### 操作：

```mysql
-- 开启事务  
	start transaction;
	-- 另一个关键字
		begin;
-- 回滚： 
	rollback；
-- 提交： 
	commit;
    -- 设置是否自动提交
        set @@autocommit = 0;-- 不自动提交
        set @@autocommit = 1;-- 自动提交
```

#### 例子：

```mysql
create table zhanghu(
	id int primary key auto_increment,
	name varchar(20),
	money double
);
```

#### mysql数据库中事务默认自动提交

```mysql
-- 事务提交的两种方式：
-- 自动提交
	-- 1，mysql就是自动提交的
	-- 2，一条DML(增删改)语句会自动提交一次事务
-- 动提交：
	-- 1，Oracle数据库默认就是手动提交事务
	-- 2，需要先开启事务，再提交
-- 修改事务的默认提交方式：
	-- 查看事务的默认提交方式：select @@autocommit;  --1代表自动提交  -- 0 代表手动提交
	-- 修改事务的默认提交方式：set @@autocommit = 0;
```

#### 事务的四大特征：

​		1，原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败
​		2，持久性：当事务提交或者回滚后，数据库会持久化的保持数据
​		3，隔离性：多个事务之间相互独立
​		4，一致性：事务操作前后，数据总量不变

#### 事务的隔离级别（了解）

概念：多个事务之间是隔离的，相互独立的，如果多个事务操作一批数据，则会引发一些问题，设置不同的隔离级别就可以解决这些问题

1. 存在问题：
   1. 脏读：一个事务读取到另一个事务中没有提交的数据		
   2. 不可重复读（虚读）：在同一个事务中，两次读取到的数据不一样
   3. 幻读：一个事务操作（DML）数据表中所有记录，另一个事务添加了一条数据，则第一个事务查询不到自己的修改
2. 隔离级别：
   1. 读未提交：read uncommitted
   2. *产生的问题:脏读  不可重复读 幻读
   3. read committed:读已提交
   4. *产生的问题：不可重复读 幻读
   5. 可重复读：repeatable read
   6. *产生的问题：幻读
   7. serializable :串行化
   8. *可以解决所有问题
   9. 注意：隔离级别从小到大，安全性越来越高，但是效率越来越低	

​	
# MySQL中的DCL：

### sql分类：

​		1，DDL 2，DML 3，DQL 3，DCL

### DBA:数据库管理员

#### 	DCL:管理用户，授权

##### 		1，管理用户：

##### 			1，添加用户

​				*语法：create user '用户名'@'主机名' IDENTIFIED by '密码';

##### 			2，删除用户

​				*语法：drop user '用户名'@'主机名';

##### 			3，修改用户密码

​				*语法：update user set password= password('新密码') where name = '用户名';

##### 			4，查询用户

​				-- > 切换到mysql数据库
​				use mysql;
​				-- >查询user表
​				select * from user;
​				通配符：% 表示可以在任意主机使用用户登陆数据库
