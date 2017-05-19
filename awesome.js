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
				'Farmers Only!',
				'https://www.farmersonly.com',
				'Lonely rednecks inc.',
				'http://images1.phoenixnewtimes.com/imager/u/original/8997139/img_0018.jpg',
				 'For all your Farming needs, Farmers Only is the site for you'
				),

			new Post(
				'Are you christian?',
				'https://www.christianmingle.com',
				'Jesus Christ',
				'https://s-media-cache-ak0.pinimg.com/originals/4b/22/f2/4b22f26391eb6a22fa74110417179e45.jpg',
				'Are you single and ready to mingle? Then Christian mingle is the site for you!'
				),

			new Post(
				'Ugly Schmucks Welcome',
				'https://google.com',
				'Bob Author',
				'http://www.uglyschmucks.com',
				'If your an asshole and happen to be very unattractive, then this site is the place for you!'
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
