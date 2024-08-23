// Get today's date
const today = new Date();

// Calculate the date 15 days from today
const futureDate = new Date(today);
futureDate.setDate(today.getDate() + 15);

// Format both dates as yyyy-mm-dd
const formattedToday = today.toISOString().split('T')[0];
const formattedFutureDate = futureDate.toISOString().split('T')[0];

// Set the min and max attributes of the date input field to the future date
document.getElementById('VisitingDate').min = formattedToday;
document.getElementById('VisitingDate').max = formattedFutureDate;

// Optionally, set the default value to the future date
document.getElementById('VisitingDate').value = formattedFutureDate;
document.getElementById('VisitingDate').value = formattedToday;

// Also set another date field (bookingDate) to today's date, if needed
document.getElementById('bookingDate').value = formattedToday;


//  stote value in local storage

//  console.log(Visiting);
document.querySelector("#save").addEventListener('click', function(){
const  visitorName= document.querySelector('#visitorName');
const  bookingDate= document.querySelector('#bookingDate');
const  VisitingDate= document.querySelector('#VisitingDate');
const  numberVisitor= document.querySelector('#numberVisitor');

// console.log(bookingDate.value);
localStorage.setItem('visitorName' , visitorName.value);
localStorage.setItem('bookingDate' , bookingDate.value);
localStorage.setItem('VisitingDate' , VisitingDate.value);
localStorage.setItem('numberVisitor' , numberVisitor.value);


 visitor = localStorage.getItem("visitorName");
 booking = localStorage.getItem("bookingDate");
 Visiting = localStorage.getItem("VisitingDate");
 numberVisit = localStorage.getItem("numberVisitor");
 mobileNumber = localStorage.getItem("mobileNumber");
    // alert("Name of the visitor " +visitor + "\n"+
    // "Name of the booking " +booking + "\n"+
    // "Name of the visitting date " + Visiting  + "\n"+
    // "Name of the Mobail number " + mobileNumber + "\n"+
    // "Name of the Visitor Number  " +numberVisit + "\n"
    // );
    
    document.querySelector('#save').addEventListener('click', function() {
        // Create the overlay
        var overlay = document.createElement('div');
        overlay.id = 'popupOverlay';
        overlay.style.display = 'flex';
       
        // Create the popup window
        var popupWindow = document.createElement('div');
        popupWindow.id = 'popupWindow';

        var imagecheck = document.createElement('div');
        imagecheck.id = 'imagecheck';
        
        // Create the close button
        var closeButton = document.createElement('button');
        closeButton.id = 'closeButton';
        closeButton.innerHTML = 'X';

        var closeButton2 = document.createElement('button');
        closeButton2.id = 'closeButton2';
        closeButton2.innerHTML = 'close';
       
    
        // Close button click event to remove the popup
        closeButton2.onclick = function() {
            document.body.removeChild(overlay);
        };
    
        var formattedText = "Name of the visitor: <b>" + visitor + "</b><br>" +
                    "Date of booking: <b>" + booking + "</b><br>" +
                    "Date of visiting : <b>" + Visiting + "</b><br>" +
                    "Mobile number: <b>" + mobileNumber + "</b><br>" +
                    "Number of visitor: <b>" + numberVisit + "</b>";
        // Create a content element
        var content = document.createElement('div');
        content.className  = 'image-check';
        content.innerHTML = formattedText



        // Append elements to the popup window
        // popupWindow.appendChild(closeButton);
       
        popupWindow.appendChild(imagecheck);
        popupWindow.appendChild(content);
        overlay.appendChild(popupWindow);
        popupWindow.appendChild(closeButton2);
    
        // Append the overlay to the body
        document.body.appendChild(overlay);
    });
    
     

    });

  



