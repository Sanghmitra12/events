// // JavaScript to handle dynamic UI changes
// document.addEventListener("DOMContentLoaded", () => {
//     const addEventBtn = document.getElementById("addEventBtn");
//     const eventsContainer = document.getElementById("eventsContainer");
  
//     const years = [2024, 2023, 2022]; // List of years
//     const months = [
//       "January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ];
  
//     // Function to show years
//     const showYears = () => {
//       eventsContainer.innerHTML = `
//         <h3>Select Year</h3>
//         <ul class="list-group">
//           ${years.map(year => `<li class="list-group-item year-item" data-year="${year}">${year}</li>`).join('')}
//         </ul>
//       `;
  
//       // Attach event listeners to year items
//       document.querySelectorAll(".year-item").forEach(item => {
//         item.addEventListener("click", (e) => {
//           const selectedYear = e.target.dataset.year;
//           showMonths(selectedYear);
//         });
//       });
//     };
  
//     // Function to show months for a selected year
//     const showMonths = (year) => {
//       eventsContainer.innerHTML = `
//         <h3>Months in ${year}</h3>
//         <ul class="list-group">
//           ${months.map(month => `<li class="list-group-item">${month}</li>`).join('')}
//         </ul>
//         <button class="btn btn-secondary btn-back">Back</button>
//       `;
  
//       // Attach event listener to "Back" button
//       document.querySelector(".btn-back").addEventListener("click", showYears);
//     };
  
//     // Show years when "Add Event" is clicked
//     addEventBtn.addEventListener("click", showYears);
//   });
  






// JavaScript to handle dynamic UI changes
document.addEventListener("DOMContentLoaded", () => {
    const addEventBtn = document.getElementById("addEventBtn");
    const eventsContainer = document.getElementById("eventsContainer");
  
    const years = [2024, 2023, 2022];
    const months = [
        "April", 
      "July", "December"
    ];
  
    // Event data mapping
    const eventDetails = {
      "2023": {
        "April": {
          title: "Glitch Techfest",
          date: "2024-04-11",
          location: "College Auditorium",
          description: "Glitch TechFest is a dynamic technology festival celebrating innovation, creativity, and the latest advancements in tech. It features workshops, hackathons, talks by industry leaders, and interactive exhibits, making it a hub for tech enthusiasts and innovators.",
             image : "https://glitch.mygbu.in/assets/coding-slow-CHcgPfPn.gif",
          link: "https://www.linkedin.com/in/glitchgbu/"
        },
        "December": {
          title: "Abhivyanjana Cultural Fest",
          date: "2024-12-10",
          location: "Main Hall",
          description: "Abhivanjana is a vibrant cultural fest that showcases the richness of art, music, dance, and traditions. With captivating performances, creative competitions, and a celebration of diverse cultures, it promises an unforgettable experience for all.",
          image: "data:image/jpeg;base64,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",
          link: "https://www.linkedin.com/school/gautam-buddha-university/posts/?feedView=all"
        }
      }
    };
  
    // Function to show years
    const showYears = () => {
      eventsContainer.innerHTML = `
        <h3>Select Year</h3>
        <ul class="list-group">
          ${years.map(year => `<li class="list-group-item year-item" data-year="${year}">${year}</li>`).join('')}
        </ul>
      `;
  
      document.querySelectorAll(".year-item").forEach(item => {
        item.addEventListener("click", (e) => {
          const selectedYear = e.target.dataset.year;
          showMonths(selectedYear);
        });
      });
    };
  
    // Function to show months for a selected year
    const showMonths = (year) => {
      eventsContainer.innerHTML = `
        <h3>Months in ${year}</h3>
        <ul class="list-group">
          ${months.map(month => `<li class="list-group-item month-item" data-month="${month}" data-year="${year}">${month}</li>`).join('')}
        </ul>
        <button class="btn btn-secondary btn-back">Back</button>
      `;
  
      // Attach event listeners to month items
      document.querySelectorAll(".month-item").forEach(item => {
        item.addEventListener("click", (e) => {
          const selectedYear = e.target.dataset.year;
          const selectedMonth = e.target.dataset.month;
          showEvent(selectedYear, selectedMonth);
        });
      });
  
      // Attach event listener to "Back" button
      document.querySelector(".btn-back").addEventListener("click", showYears);
    };
  
    // Function to show event details
    const showEvent = (year, month) => {
      const event = eventDetails[year] && eventDetails[year][month];
      if (event) {
        eventsContainer.innerHTML = `
          <div class="event-card">
            <h3>${event.title}</h3>
            <img src="${event.image}" alt="${event.title}">
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <a href="${event.link}" target="_blank" class="btn btn-primary">Learn More</a>
          </div>
          <button class="btn btn-secondary btn-back">Back</button>
        `;
  
        // Attach event listener to "Back" button
        document.querySelector(".btn-back").addEventListener("click", () => showMonths(year));
      } else {
        eventsContainer.innerHTML = `
          <h3>No Event Found</h3>
          <button class="btn btn-secondary btn-back">Back</button>
        `;
  
        document.querySelector(".btn-back").addEventListener("click", () => showMonths(year));
      }
    };
  
    // Show years when "Add Event" is clicked
    addEventBtn.addEventListener("click", showYears);
  });
  