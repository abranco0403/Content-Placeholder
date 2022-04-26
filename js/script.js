const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const profile_name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = ' <img src="https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Horseshoe Bend">';

    title.innerHTML = 'Horseshoe bend';

    excerpt.innerHTML = 'Horseshoe Bend has been featured as a landmark for Glen Canyon National Recreation Area, Grand Canyon National Park, the Cities of Page AZ, Kanab UT, St George UT, and the Navajo Nation.';

    profile_img.innerHTML ='<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="">';

    profile_name.innerHTML = 'jane Doe';

    date.innerHTML = 'April 24, 2022';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));

    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}







