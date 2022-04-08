var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.450317, 126.785735),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);