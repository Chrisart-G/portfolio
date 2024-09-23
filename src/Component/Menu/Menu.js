
import './Menu.css';
function Menu() {
  return (
    <div className="Menu">
      <header className="Menu">
      <div className='navbar'>

        <div class="max-w-screen-xl px-4 py-3 mx-auto">
             <div class="flex items-center">
                 <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                   <li>
                   <a href="#" class="text-white dark:text-white hover:underline" aria-current="page">About</a>
                   </li>
                   <li>
                   <a href="#" class="text-white dark:text-white hover:underline">Work</a>
                   </li>
                   <li>
                   <a href="#" class="text-white dark:text-white hover:underline">Blog</a>
                   </li>
                   <li>
                   <a href="#" class="text-white dark:text-white hover:underline">Contact</a>
                   </li>
                  </ul>
             </div>
     </div>

</div>


        


      </header>
    </div>
  );
}

export default Menu;
