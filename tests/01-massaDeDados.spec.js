import { test } from "@playwright/test";
import { jsPDF } from "jspdf";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
 

test.describe('001 Gerar usuário para login', () => {
    test('@MassaDeDados Gerar email e password e populando no user JSON', async ({}) => {

      const datasetUser = JSON.parse(JSON.stringify(require("../utils/user.json")));
      const fs = require("fs");
      const faker_br = require("faker-br");
     
      const userCPF = faker_br.br.cpf();
      const userEmail = userCPF  +"@test"+userCPF+".com";
      const userPassword = userCPF+ "pass";
      datasetUser.userEmail = userEmail;
      datasetUser.userPassword = userPassword;
      const jsonString = (datasetUser);

      
     
      
       fs.writeFile("./utils/user.json",JSON.stringify(jsonString), (err) => {
        if (err)
          console.log(err);
        else {
          console.log("\nUsuario gerado com sucesso");
        }

      });

    })
  })