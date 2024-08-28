// Raccolta dati dal DOM
let memberList = document.getElementById('members-list')
// Creo un array di oggetti
const teamMembers = [ 
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'images': 'wayne-barnett-founder-ceo.jpg'
      },
      {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'images': 'angela-caroll-chief-editor.jpg'
      },
      {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'images': 'walter-gordon-office-manager.jpg'
      },
      {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'images': 'angela-lopez-social-media-manager.jpg'
      },
      {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'images': 'scott-estrada-developer.jpg'
      },
      {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'images': 'barbara-ramos-graphic-designer.jpg'
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
        info.innerHTML = `Nome: ${member.name}, Professione: ${member.role}, Immagine di copertina: ${member.images}`;
        memberList.appendChild(info)
    });





