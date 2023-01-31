import React, {Fragment, useState} from 'react'
import { motion } from "framer-motion";
import "./keep.css"



function KEEPAPP() {

 const [setCarbohydrate, UpdateCarbohydrate] = useState([""]);
 const [setProtein, UpdateProtein] = useState([""]);
 const [setMineral, UpdateMineral] = useState([""]);
 const [setFat, UpdateFat] = useState([""]);
 const [setVitamin, UpdateVitamin] = useState([""]);

 const [isActive, setIsActive] = React.useState(false);

    const handleupdateCarboydrate =()=>{
    if (setCarbohydrate === ""){
      UpdateCarbohydrate( 
    <Fragment>
 <div>
 <div class="modal fade" id="myModal" role="dialog">
   <div class="modal-dialog modal-lg">
     <div class="modal-content">
       <div class="modal-header bg-warning">
         <h4 class="modal-title">Carbohydrate</h4>
       </div>
       <div class="modal-body bg-warning">
         <p>carbohydrate, class of naturally occurring compounds and derivatives formed from them.
           In the early part of the 19th century, substances such as wood, starch, and linen were found
            to be composed mainly of molecules containing atoms of carbon (C), hydrogen (H), and oxygen (O) 
            and to have the general formula C6H12O6; other organic molecules with similar formulas were found 
            to have a similar ratio of hydrogen to oxygen. The general formula Cx(H2O)y is commonly used
             to represent many carbohydrates, which means “watered carbon.”
        Carbohydrates are probably the most abundant and widespread organic substances in nature, 
        and they are essential constituents of all living things. Carbohydrates are formed by green plants
         from carbon dioxide and water during the process of photosynthesis. Carbohydrates serve as energy sources 
         and as essential structural components in organisms; in addition, part of the structure of nucleic acids, 
         which contain genetic information, consists of carbohydrate.

</p>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>
</div>   







        <div id='protein-div'>
        <div id='protein-container'>  
        <h1>Cassava</h1>
        <div id='Cassava'></div>
        <div id='text-div'>
          <ol>
          <li> Improve metabolic health. </li>
          <li> Increased feelings of fullness.</li>
          <li>Helps fight Inflammation.</li>
          <li>Supports healthy weight management.</li>
        </ol>
          </div>
        </div>
        <div id='protein-container'>
        <h1>Yam</h1>
        <div id="yam"></div>
        <div id='text-div'>
          <ol>
          <li>May enhance brain function.</li>
          <li> May have cancer-fighting properties</li>
          <li>May improve blood sugar control</li>
          <li>Packed with nutrition</li>
        </ol>
          </div>
        </div>
       <div id='protein-container'>
        <h1>Potatoes</h1>
        <div id="potatoes"></div>
          <div id='text-div'>
          <ol>
          <li> May Improve Digestive Health</li>
          <li> Naturally Gluten-Free. </li>
          <li> Contain Antioxidants. </li>
          <li> Lower Blood Pressure</li>
        </ol>
          </div>
        </div>
        <div id='protein-container'>
        <h1>Maize</h1>
        <div id="maize"></div>
        <div id='text-div'>
          <ol>
          <li>It prevents haemorrhoids</li>
          <li> It promotes growth</li>
          <li> It’s good for the eyes and skin.</li>
          <li> It prevents anemia.</li>
        </ol>
          </div>
        </div>
     
          
          </div>
    </Fragment>
          )
    }
    else{
      UpdateCarbohydrate("")
    }
    }

    const handleupdateProtein =()=>{

    

        if (setProtein === ""){  
            UpdateProtein(
      <Fragment>
 <div>
 <div class="modal fade" id="myModal" role="dialog">
   <div class="modal-dialog modal-lg">
     <div class="modal-content">
       <div class="modal-header bg-primary">
         <h4 class="modal-title">Protein</h4>
       </div>
       <div class="modal-body bg-primary">
         <p>Proteins are large, complex molecules that play many critical roles in the body. They do most of the work in cells and
           are required for the structure, function, and regulation of the body’s tissues and organs.
         Proteins are made up of hundreds or thousands of smaller units called amino acids,
        which are attached to one another in long chains. There are 20 different types of
         amino acids that can be combined to make a protein. The sequence of amino acids
         determines each protein’s unique 3-dimensional structure and its specific function.
         Amino acids are coded by combinations of three DNA building blocks (nucleotides), determined by the sequence of genes.</p>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>
</div>   
        
        <div id='protein-div'>  
                
            <div id='protein-container'>  
            <h1>Meat</h1>
            <div id='meat'></div>
            <div id='text-div'>
              <ol>
              <li> iodine to help your body produce thyroid hormone.</li>
              <li>iron to carry oxygen around your body.</li>
              <li>vitamin B12 for your nervous system.</li>
              <li>omega 3 to support heart and brain health.</li>
            </ol>
              </div>
            </div>
            <div id='protein-container'>
            <h1>Fish</h1>
            <div id="fish"></div>
            <div id='text-div'>
              <ol>
              <li>Lower Risk for Metabolic Syndrome</li>
              <li> Good Source of Bone-Building Nutrients</li>
              <li>Excellent Source of Collagen</li>
              <li>Selenium is a cancer-fighting antioxidant.</li>
            </ol>
              </div>
            </div>
           <div id='protein-container'>
            <h1>Milk</h1>
            <div id="milk"></div>
              <div id='text-div'>
              <ol>
              <li> developing and maintaining healthy bones and teeth</li>
              <li> helping with blood clotting and wound healing</li>
              <li> controlling muscle contractions, including the heartbeat</li>
              <li> maintaining normal blood pressure</li>
            </ol>
              </div>
            </div>
            <div id='protein-container'>
            <h1>Eggs</h1>
            <div id="egg"></div>
            <div id='text-div'>
              <ol>
              <li> Zinc helps your immune system.</li>
              <li>Calcium helps your bones stay strong.</li>
              <li>Phosphorus aids in healthy bones and teeth.</li>
              <li>Selenium is a cancer-fighting antioxidant.</li>
            </ol>
              </div>
            </div>
         
              
              </div>
      </Fragment>
            )
        }
        else{
            UpdateProtein("")
        }
        }

     const handleupdateMineral =()=>{
         if (setMineral=== ""){
                UpdateMineral(
                 <Fragment>
                   <div>
 <div class="modal fade" id="myModal" role="dialog">
   <div class="modal-dialog modal-lg">
     <div class="modal-content">
       <div class="modal-header bg-success">
         <h4 class="modal-title">Mineral Salt</h4>
       </div>
       <div class="modal-body bg-success">
         <p>
         Mineral salts are inorganic salts that need to be ingested or absorbed by living organisms for healthy growth and maintenance.
          They comprise the salts of the trace elements in animals and the micronutrients of plants.
      Mineral salts have structural functions and functions in the regulation of pH,
      osmotic pressure and biochemical reactions involving specific ions. 
      They participate in chemical reactions at electrolyte levels. 
      Vital processes require the presence of certain salts in the form of ions such as chlorides,
      carbonates and sulfates. The most abundant cations in the composition of living beings are Na+, K+, Ca2+, Mg2+. 
      The most representative anions are Cl-, PO43-, CO32-, HCO3-.


         </p>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>
</div>   

        <div id='protein-div'>
        <div id='protein-container'>  
        <h1>Himalaya</h1>
        <div id='himalaya'></div>
        <div id='text-div'>
          <ol>
          <li> Reduce signs of aging.. </li>
          <li> Increase libido.</li>
          <li>Improve sleep quality.</li>
          <li>Improve respiratory diseases.</li>
        </ol>
          </div>
        </div>
        <div id='protein-container'>
        <h1>Zinc</h1>
        <div id="zinc"></div>
        <div id='text-div'>
          <ol>
          <li>Zinc helps keep your immune system strong.</li>
          <li>Accelerates Wound Healing.</li>
          <li>May Help Treat Acne.</li>
          <li>Decreases Inflammation.</li>
        </ol>
          </div>
        </div>
       <div id='protein-container'>
        <h1>Sulfur</h1>
        <div id="sulfur"></div>
          <div id='text-div'>
          <ol>
          <li> Treatment of hair loss</li>
          <li> Naturally Gluten-Free. </li>
          <li> Contain Antioxidants. </li>
          <li> Lower Blood Pressure</li>
        </ol>
          </div>
        </div>
        <div id='protein-container'>
        <h1>Potassium-Chloride</h1>
        <div id="potassium"></div>
        <div id='text-div'>
          <ol>
          <li>It prevents haemorrhoids</li>
          <li> It promotes growth</li>
          <li> It’s good for the eyes and skin.</li>
          <li> It prevents anemia.</li>
        </ol>
          </div>
        </div>
     
          
          </div>
                 </Fragment>
                )
            }
            else{
                UpdateMineral("")
            }
            }
    
    const  handleupdateFat =()=>{
          if (setFat === ""){
        UpdateFat(     
          <Fragment>
<div>
<div class="modal fade" id="myModal" role="dialog">
   <div class="modal-dialog modal-lg">
     <div class="modal-content">
       <div class="modal-header bg-danger">
         <h4 class="modal-title">Fat & Oil</h4>
       </div>
       <div class="modal-body bg-danger">
         <p>
         Fats and oils are made up of molecules known as triglycerides,
          which are esters consisting of three fatty acid units connected to glycerol. 
         The rise in the amount of shorter chain fatty acids and/or unsaturated fatty acids reduces the melting point for fat or oil.
         </p>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>
</div> 






              <div id='protein-div'>
        <div id='protein-container'>  
        <h1>Butter</h1>
        <div id='butter'></div>
        <div id='text-div'>
          <ol>
          <li> Reduce signs of aging.. </li>
          <li> Increase libido.</li>
          <li>Improve sleep quality.</li>
          <li>Improve respiratory diseases.</li>
        </ol>
          </div>
        </div>
        <div id='protein-container'>
        <h1>Ground-nut Oil</h1>
        <div id="Gnutoil"></div>
        <div id='text-div'>
          <ol>
          <li>Zinc helps keep your immune system strong.</li>
          <li>Accelerates Wound Healing.</li>
          <li>May Help Treat Acne.</li>
          <li>Decreases Inflammation.</li>
        </ol>
          </div>
        </div>
       <div id='protein-container'>
        <h1>Glee</h1>
        <div id="glee"></div>
          <div id='text-div'>
          <ol>
          <li> Treatment of hair loss</li>
          <li> Naturally Gluten-Free. </li>
          <li> Contain Antioxidants. </li>
          <li> Lower Blood Pressure</li>
        </ol>
          </div>
        </div>
        <div id='protein-container'>
        <h1>Palm-Oil</h1>
        <div id="palmoil"></div>
        <div id='text-div'>
          <ol>
          <li>It prevents haemorrhoids</li>
          <li> It promotes growth</li>
          <li> It’s good for the eyes and skin.</li>
          <li> It prevents anemia.</li>
        </ol>
          </div>
        </div>  
          </div>
          </Fragment>
                       )
                   }
        else{
      UpdateFat("")
     }
     }

     const handleupdateVitamin =()=>{
        if (setVitamin === ""){
      UpdateVitamin(    
        <Fragment>

<div>
<div class="modal fade" id="myModal" role="dialog">
   <div class="modal-dialog modal-lg">
     <div class="modal-content">
       <div class="modal-header">
         <h4 class="modal-title">Vitamins</h4>
       </div>
       <div class="modal-body">
         <p>
         Vitamins and minerals are micronutrients required by the body to carry out a range of normal functions. 
         However, these micronutrients are not produced in our bodies and must be derived from the food we eat. 
         Vitamins are organic substances that are generally classified as either fat soluble or water soluble.
         </p>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>
</div> 



           <div id='protein-div'>
      <div id='protein-container'>  
      <h1>Folate</h1>
      <div id='folate'></div>
      <div id='text-div'>
        <ol>
        <li> Reduce signs of aging.. </li>
        <li> Increase libido.</li>
        <li>Improve sleep quality.</li>
        <li>Improve respiratory diseases.</li>
      </ol>
        </div>
      </div>
      <div id='protein-container'>
      <h1>Copper</h1>
      <div id="copper"></div>
      <div id='text-div'>
        <ol>
        <li>Zinc helps keep your immune system strong.</li>
        <li>Accelerates Wound Healing.</li>
        <li>May Help Treat Acne.</li>
        <li>Decreases Inflammation.</li>
      </ol>
        </div>
      </div>
     <div id='protein-container'>
      <h1>Vitamin-D</h1>
      <div id="vitaminD"></div>
        <div id='text-div'>
        <ol>
        <li> Treatment of hair loss</li>
        <li> Naturally Gluten-Free. </li>
        <li> Contain Antioxidants. </li>
        <li> Lower Blood Pressure</li>
      </ol>
        </div>
      </div>
      <div id='protein-container'>
      <h1>Iron</h1>
      <div id="iron"></div>
      <div id='text-div'>
        <ol>
        <li>It prevents haemorrhoids</li>
        <li> It promotes growth</li>
        <li> It’s good for the eyes and skin.</li>
        <li> It prevents anemia.</li>
      </ol>
        </div>
      </div>
   
        
        </div>
        </Fragment>
                     )
                 }
      else{
    UpdateVitamin("")
   }
   }

   

  return (
    
<div>
<div id='Parent-div'>
   

   <div>
   <button onClick={handleupdateCarboydrate} data-toggle="modal" data-target="#myModal">Carbohydrate</button>
   </div>
     
     <div>
    <button onClick={ handleupdateProtein} data-toggle="modal" data-target="#myModal">Protein</button>
     </div>
 
     <div>
     <button onClick={ handleupdateMineral} data-toggle="modal" data-target="#myModal">Mineral-Salt</button>
     </div>
   
    

     <div>
     <button onClick={ handleupdateFat} data-toggle="modal" data-target="#myModal">Fat & Oil</button>
     </div>
 

     <div>
     <button onClick={ handleupdateVitamin} data-toggle="modal" data-target="#myModal">Vitamin</button>
     </div>



</div>
<div>
<div>{setCarbohydrate}</div> 
 <div>{setProtein}</div> 
  <div>{setMineral}</div>
   <div>{setFat}</div>  
    <div>{setVitamin}</div>  
</div>

</div>

  )
}




export default KEEPAPP