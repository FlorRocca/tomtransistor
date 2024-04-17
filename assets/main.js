const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCsz90I9m24HDDSyoYT740wA&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3be34e8031msh2f25448642e194cp13d6b9jsnc5e0d6e7e631',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async ()=>{
    try{
        const videos= await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
                <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-8"></span>
                        ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,8).join(" ")}
        `;
        content.innerHTML = view; 

    }catch (error){
        console.log(error);
    }
})();








//Este código fue copiado de RapiApi - pero arriba está lo aprendido en Platzi 
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }