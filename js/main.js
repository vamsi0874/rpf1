
  const menuIconButton = document.querySelector("[data-menu-icon-btn]")
  const sidebar = document.querySelector("[data-sidebar]")
  
  
  const content=document.querySelector('.content')
  const caseRegistration=document.querySelector('a.sidebar-link.case-Registration')
  const about=document.querySelector('a.sidebar-link.about')
  
  const trail=document.querySelector('a.sidebar-link.trail-case')
  const ptc=document.querySelector('a.sidebar-link.ptc')
  const disposals=document.querySelector('a.sidebar-link.disposals')

  // const up=document.querySelector('a.sidebar-link.case-Registration')
  // const hi=document.querySelector('.hi')
  
  
  menuIconButton.addEventListener("click", () => {
    sidebar.classList.toggle("open")
  })

  $('document').ready(()=>{

    caseRegistration.addEventListener('click',()=>{
    $('.content').load('../reg.html')
    })

    about.addEventListener('click',()=>{
      $('.content').load('html/about.html')
      
      })
    trail.addEventListener('click',()=>{
      $('.content').load('html/trail.html')
      
      })
      
    ptc.addEventListener('click',()=>{
      $('.content').load('html/ptc.html')
      
      })
    disposals.addEventListener('click',()=>{
      $('.content').load('html/disposal.html')
      
      })

  });
  
  


