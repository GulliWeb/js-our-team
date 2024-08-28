// Raccolta dati dal DOM
let memberList = document.getElementById('members-list')
// Creo un array di oggetti
const teamMembers = [ 
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'images': 'img/wayne-barnett-founder-ceo.jpg'
      },
      {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'images': 'img/angela-caroll-chief-editor.jpg'
      },
      {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'images': 'img/walter-gordon-office-manager.jpg'
      },
      {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'images': 'img/angela-lopez-social-media-manager.jpg'
      },
      {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'images': 'img/scott-estrada-developer.jpg'
      },
      {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'images': 'img/barbara-ramos-graphic-designer.jpg'
      }
    ];

    // Stampo le informazioni delle proprietà degli oggetti in console
    console.table(teamMembers);

    // Stampo in console le informazioni delle proprietà degli oggetti 
    teamMembers.forEach(member => {
    console.table(`Nome: ${member.name}, Professione: ${member.role}, Immagine di copertina: ${member.images}`);
    });

    // Stampo nel DOM le informazioni delle proprietà degli oggetti 
    teamMembers.forEach(member => {
        let info = document.createElement('li')
        info.innerHTML = `Nome: ${member.name}, Professione: ${member.role}, Immagine di copertina:`;
        memberList.appendChild(info)

        // Creo l'immagini
        let img = document.createElement('img')
        img.src = member.images
        img.style.width = '150px'
        img.style.height = 'auto'

        memberList.appendChild(img)
    });





