# Vue.js <img src="https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png" height="25"> + MySQL <img src="https://w7.pngwing.com/pngs/614/744/png-transparent-mysql-database-mariadb-dolphin-marine-mammal-animals-text.png" height="25"> really simple tasks project.

## **Features**

- Create Tasks
- Read Tasks
- Update Tasks
- Delete Tasks

## Task Model

- **ID**

  - type: _Sequelize.INTEGER_
  - primaryKey: _true_
  - autoIncrement: _true_

- **Name**
  - type: _Sequelize.STRING_

## **Instructions**

1. Create a MySQL Database named `vue-mysql`
2. Create a table named `tbl-tasks` with 2 columns
   - `id` witch is of type **INT** _PK_, _NN_ and _AI_
   - `name` as **varchar(45)**
3. enter `server` folder and type `npm i && node main.js`
4. enter `client` folder and type `npm i && npm run serve`
