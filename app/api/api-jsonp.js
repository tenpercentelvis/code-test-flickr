
import $ from 'jquery';

// api data

class api {

  static getData(value) {

    const config = {
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
      dataType: 'jsonp',
      data: {
        tags: value || 'sunrise',
      },
    };

    return $.ajax(config)

      .then((data) => {
        return {
          items: data.items,
        };
      })

      .catch((error) => {
        console.log(error);
      });

  }

}

export default api;
