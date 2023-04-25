const save = () => {
   try{
       let EmployeePayrollData=createEmployeePayroll();
       createAndUpdateStorage(EmployeePayrollData);
   }catch (e) {
       return;
       }
   }
   
   const createEmployeePayroll= () => {
      let employeePayrollData= new EmployeePayrollData();
      try{
          employeePayrollData.name = getInputValueById('#name');
      } catch (e) {
          setTextValue('.text-error',e);
          throw e;
      }
      employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
      employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
      employeePayrollData.department=getSelectedValues('[name=department]');
      employeePayrollData.department = getSelectedValues('[name=department]');
      employeePayrollData.salary=getInputValueById('#salary');
      employeePayrollData.note=getInputValueById('#notes');
      let day = getInputValueById('#day');
      let month = getInputValueById('#month');
      let year = getInputValueById('#year');
      let date = `${month} ${day}, ${year}`;
      employeePayrollData.start_date = date;
      alert(employeePayrollData.toString());
      return employeePayrollData;
  }
  
   
  const getSelectedValues = (propertyValue) => {
   let allItems = document.querySelectorAll(propertyValue);
   let selItems = [];
   allItems.forEach(item => {
     if (item.checked) selItems.push(item.value);
   });
   return selItems;
 }
 
  
   const getInputValueById= (id) => {
       let value = document.querySelector(id).value;
       return value;
   }
   
   const getInputElementValue = (id) => {
       let value = document.getElementById(id).value;
       return value;
   }


   function createAndUpdateStorage(employeePayrollData) {
      let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
      if (employeePayrollList != undefined) {
         employeePayrollList.push(employeePayrollData);
      } else {
         employeePayrollList = [employeePayrollData];
      }
      alert(employeePayrollList.toString());
      localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
   }

   // -----------------------------------------------------------reset--------------------------------------------------------------


   const resetForm = () => {
      setValue('#name', '');
      unsetSelectedValues('[name=profile]');
      unsetSelectedValues('[name=gender]');
      unsetSelectedValues('[name=department]');
      setValue('#salary', '');
      setValue('#notes', '');
      setValue('#day', 'Day');
      setValue('#month', 'Month');
      setValue('#year', 'Year');
      setDisplay('.salary-output','');
   };
   
   const unsetSelectedValues = (propertyValue) => {
      let allItems = document.querySelectorAll(propertyValue);
      allItems.forEach(item => {
         item.checked = false;
      });
   }
   
   const setTextValue = (id, value) => {
      const element = document.querySelector(id);
      element.textContent = value;
   }
   
   const setValue = (id, value) => {
      const element = document.querySelector(id);
      element.value = value;
   }

   const setDisplay=(id,value)=>{
      const element = document.querySelector(id);
      element.textContent=value;
   }