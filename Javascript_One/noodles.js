{/* <li>Link this HTML file (JS_First_Exercise.html) to you own .js file</li> DONE
      <li>Use Javascript to accept a number input in pounds (lbs)</li>
      <li>Then in your js file convert this number to kilograms (* 0.454)</li>
      <li>Afterwards report back in an alert what the weight is in kg</li>
      <li>Then log/write "Conversion Completed" to the console</li> */}


      var pounds = prompt("Please enter your weight in pounds: ");
      var kg = pounds * 0.454;

      alert("Your weight is: " + kg + "kilograms");
      console.log("Conversion Completed");
