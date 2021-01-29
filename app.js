//    document.getElementById('casePlus').addEventListener('click', function(){
//         const caseInput = document.getElementById('caseCount');
//         const caseCount = parseInt(caseInput.value);
//         const caseNewCount =  caseCount + 1;
//         caseInput.value = caseNewCount;
//         const caseTotalPrice = caseNewCount * 59;
//         document.getElementById('casePrice').innerText = '$' + caseTotalPrice;
//    })
//    document.getElementById('caseMinus').addEventListener('click', function(){
//     const caseInput = document.getElementById('caseCount');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount =  caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotalPrice = caseNewCount * 59;
//     document.getElementById('casePrice').innerText = '$' + caseTotalPrice;
// })
// document.getElementById('phoneIncrease').addEventListener('click',function(){
//     const phoneInput = document.getElementById('phoneCount');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const totalPrice = phoneNewCount * 1219 ;
//     document.getElementById('phonePrice').innerText = totalPrice;
//    });
//    document.getElementById('phoneDecrease').addEventListener('click', function(){
//        const phoneInput = document.getElementById('phoneCount');
//       const  phoneCount = parseInt(phoneInput.value);
//        const phoneNewCount = phoneCount - 1;
//        phoneInput.value = phoneNewCount;
//        const totalPrice = phoneNewCount * 1219;
//        document.getElementById('phonePrice').innerText = '$' + totalPrice;
//    });


// function handlePhoneChange(isIncrease){
//     const phoneInput = document.getElementById('phoneCount');
//     const  phoneCount = parseInt(phoneInput.value);
//     //  const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true ){
//         phoneNewCount = phoneCount +1
//     }
//     if(isIncrease == false & phoneCount > 0){
//         phoneNewCount = phoneCount - 1 ;
//     }
//      phoneInput.value = phoneNewCount;
//      const totalPrice = phoneNewCount * 1219;
//      document.getElementById('phonePrice').innerText = '$' + totalPrice;
//    }
// function handleCaseChange(isIncrease){
//     const caseInput = document.getElementById('caseCount');
//         const caseCount = parseInt(caseInput.value);
//         // const caseNewCount =  caseCount + 1;
//         let caseNewCount = caseCount;
//         if(isIncrease = true){
//             caseNewCount = caseCount + 1;
//         }
//         if(isIncrease = false & caseCount > 0){
//             caseNewCount = caseCount - 1 ;
//         }
//         caseInput.value = caseNewCount;
//         const caseTotalPrice = caseNewCount * 59;
//         document.getElementById('casePrice').innerText = '$' + caseTotalPrice;
// }


function handleProductChange(product,isIncrease){
    
    const  productCount = getInputValue(product);
  
    //  const phoneNewCount = phoneCount - 1;
    let productNewCount = productCount;
    if (isIncrease == true ){
        productNewCount = productCount +1;
    }
    if(isIncrease == false & productCount > 0){
       productNewCount = productCount - 1 ;
    }
       document.getElementById (product + '-Count').value = productNewCount;
       let productPrice = 0;
       if (product == 'phone'){
           productPrice = productNewCount * 1219;
       }
       if (product == 'case'){
        productPrice = productNewCount * 59 ;
       }
     document.getElementById(product + '-Price').innerText = '$' + productPrice;
     calculateTotal();
   }
function calculateTotal (){
   
    const phoneCount = getInputValue('phone')
    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('product-total').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax ;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-Count')
    const productCount = parseInt(productInput.value);
    return productCount;
}














