class Post {
	constructor(title,link,author,img,body){
		this.title = title;
		this.link = link;
		this.author = author;
		this.img = img;
		this.body = body;
	}
}

const app = new Vue({

	el: '#root',

	data: {

		keyword: '',

		postlist: [
		
		new Post(
				'First Post! Yay!',
				'https://google.com',
				'An Author',
				'http://slodive.com/wp-content/uploads/2012/07/real-pictures-of-jesus/devine-jesus.jpg',
				 'being indian instantly makes you indian'
				),

			new Post(
				'Second Post: Lorem',
				'https://vuejs.org',
				'Sammie Author',
				'img-200.jpg',
				'Marley is mean and Rai wasn\'t right'
				),

			new Post(
				'This Post: Crazy Fredrick',
				'https://google.com',
				'Bob Author',
				'https://unsplash.it/200',
				'Hey whoever asked Rai if he was gay do not worry he is not'
				),

			new Post(
				'Another Post: Promptly judged',
				'https://vuejs.org',
				'Jane Author',
				'https://unsplash.it/200',
				'When i die i might as well go out high as balls'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'Anptoght Author',
				'https://unsplash.it/200',
				'Jaded zombies acted quaintly but kept driving their oxen forward. Morbi viverra euismod euismod. Nulla leo est, venenatis at fringilla eget, tincidunt sed justo. In efficitur dui odio, sit amet finibus sem hendrerit ut. Etiam vestibulum sem vel metus lobortis, vitae dictum metus sagittis. Nulla facilisi.'
				)
		]
	},
	computed: {
		filterlist(){
			return this.postlist.filter((post)=>{
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});
