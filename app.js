var app = new Vue({
  el: '#app',
  data: {
    myData: '',
    forkCount: 0
  },
  computed: {
    getForksCount: function() {
      return myData.map(item => {
        this.forkCount += item.forks_count;
      });
    }
  },
  mounted: function() {
    return axios
      .get(
        'https://api.github.com/user/repos?access_token=26b2b54a71e7f8fb16cef469d6b47ec84' +
          '76288d3'
      )
      .then(response => {
        this.myData = response.data;
      });
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 512) {
      $('#menu').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 513) {
      $('#menu').removeClass('navbar-fixed');
    }
  });
});

const about = document.getElementById('about');
about.onclick = e => {
  analytics.track('this about page', { clicked: 'oh Boy' });
};
