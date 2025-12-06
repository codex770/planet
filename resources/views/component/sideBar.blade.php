        <div id="mySidenav" class="sidenav">
            <button class="closebtn" onclick="closeNav()"><span class="float-left">Planeten</span> <i
                    class="fas fa-times float-right"></i>
            </button>
            <ul>
                <li><a href="{{ url('/sun')}}"><i class="fas fa-globe-asia"></i> &nbsp; Sun</a></li>
                <li><a href="{{ url('/mercury')}}"><i class="fas fa-globe-asia"></i> &nbsp; Mercury</a></li>
                <li><a href="{{ url('/venus')}}"><i class="fas fa-globe-asia"></i> &nbsp; Venus</a></li>
                <li><a href="{{ url('/earth')}}"><i class="fas fa-globe-asia"></i> &nbsp; Earth</a></li>
                <li><a href="{{ url('/mars')}}"><i class="fas fa-globe-asia"></i> &nbsp; Mars</a></li>
                <li><a href="{{ url('/jupiter')}}"><i class="fas fa-globe-asia"></i> &nbsp; Jupiter</a></li>
                <li><a href="{{ url('/saturn')}}"><i class="fas fa-globe-asia"></i> &nbsp; Saturn</a></li>
                <li><a href="{{ url('/uranus')}}"><i class="fas fa-globe-asia"></i> &nbsp; Uranus</a></li>
                <li><a href="{{ url('/neptune')}}"><i class="fas fa-globe-asia"></i> &nbsp; Neptune</a></li>
            </ul>
        </div>

        <button class="open_nav_btn" onclick="openNav()">
            <span class="fas fa-globe"></span>
        </button>
        <audio class="spot1" style="display: none;" controls="true">
            <source src="mars_intro_german.mp3" type="audio/mp3">
            <source src="audio/sample.ogg" type="audio/ogg">
            <source src="audio/sample.aac" type="audio/mp4">
            <!-- If no support at all. -->
            HTML5 audio not supported
        </audio>
        <button class="open_nav_btn left">
            <span id="spot1" class="play-pause-button fa fa-play"></span>
            <!-- <span class="far fa-play-circle"></span> -->
        </button>