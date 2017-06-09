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
				'http://www.uglyschmucks.com',
				'Moses',
				'https://uproxx.files.wordpress.com/2010/07/steve_carell_despicable_schmucks.jpg?quality=100&w=650',
				'If your an asshole and happen to be very unattractive, then this site is the place for you!'
				),

			new Post(
				'Clown Dating',
				'http://www.clowndating.com',
				'Krusty the Clown',
				'https://static.pexels.com/photos/39242/clown-creepy-grinning-facepaint-39242.jpeg',
				'For the single circus performer with a sensitive side! Children also welcome.'
				),

			new Post(
				'For all the Kute Kamines',
				'https://www.indiamatch.com/?sid=124&afid=GGN23082&st=indian%20dating%20site&ds=&stype=std&cid=3567079899&agn=HV-%20Indian%20Dating%20Sites&gclid=CN2ZjIylsdQCFYiVfgodEDUAKA',
				'Pretish',
				'https://www.proximeety.net/photos/I/N//INDIAN_DUDE16_2.JPG',
				'For all you folks that put the Desi in Desirable... India match is the place for you'
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
