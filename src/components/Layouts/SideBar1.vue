<template>
  <div class="sidebar" data-color="blue" data-image="../assets/img/full-screen-image-3.jpg">
        <!--

            Tip 1: you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple"
            Tip 2: you can also add an image using data-image tag

        -->

        <div class="logo">
            <a href="http://www.creative-tim.com" class="simple-text logo-mini">
                Ct
            </a>

			<a href="http://www.creative-tim.com" class="simple-text logo-normal">
				Creative Tim
			</a>
        </div>

    	<div class="sidebar-wrapper">
            <div class="user">
				<div class="info">
					<div class="photo">
	                    <img src="../assets/img/default-avatar.png" />
	                </div>

					<a data-toggle="collapse" href="#collapseExample" class="collapsed">
						<span>
							Tania Andrew
	                        <b class="caret"></b>
						</span>
                    </a>

					<div class="collapse" id="collapseExample">
						<ul class="nav">
							<li>
								<a href="#pablo">
									<span class="sidebar-mini">MP</span>
									<span class="sidebar-normal">My Profile</span>
								</a>
							</li>

							<li>
								<a href="#pablo">
									<span class="sidebar-mini">EP</span>
									<span class="sidebar-normal">Edit Profile</span>
								</a>
							</li>

							<li>
								<a href="#pablo">
									<span class="sidebar-mini">S</span>
									<span class="sidebar-normal">Settings</span>
								</a>
							</li>
						</ul>
                    </div>
				</div>
            </div>

			<ul class="nav">
				<li class="active">
					<a href="dashboard.html">
						<i class="pe-7s-graph"></i>
						<p>Trang chủ</p>
					</a>
				</li>
				<li>
					<a data-toggle="collapse" href="#componentsExamples">
                        <i class="pe-7s-plugin"></i>
                        <p>Quản lý chung
                           <b class="caret"></b>
                        </p>
                    </a>
					<div class="collapse" id="componentsExamples">
						<ul class="nav">
							<li>
								<a href="components/buttons.html">
									<span class="sidebar-mini">D</span>
									<span class="sidebar-normal">Quản lý Danh mục</span>
								</a>
							</li>
							<li>
								<router-link :to="{name:'authors-list'}">
									<span class="sidebar-mini">TG</span>
									<span class="sidebar-normal">Quản lý Tác giả</span>
								</router-link>
							</li>
							<li>
								<a href="components/panels.html">
									<span class="sidebar-mini">NXS</span>
									<span class="sidebar-normal">Quản lý Nhà xuất bản</span>
								</a>
							</li>
							<li>
								<a href="components/sweet-alert.html">
									<span class="sidebar-mini">SA</span>
									<span class="sidebar-normal">Quản lý Dịch giả</span>
								</a>
							</li>
							<li>
								<a href="components/notifications.html">
									<span class="sidebar-mini">N</span>
									<span class="sidebar-normal">Notifications</span>
								</a>
							</li>
							<li>
								<a href="components/icons.html">
									<span class="sidebar-mini">I</span>
									<span class="sidebar-normal">Icons</span>
								</a>
							</li>
							<li>
								<a href="components/typography.html">
									<span class="sidebar-mini">T</span>
									<span class="sidebar-normal">Typography</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<a data-toggle="collapse" href="#formsExamples">
                        <i class="pe-7s-note2"></i>
                        <p>Forms
                           <b class="caret"></b>
                        </p>
                    </a>
					<div class="collapse" id="formsExamples">
						<ul class="nav">
							<li>
								<a href="forms/regular.html">
									<span class="sidebar-mini">Rf</span>
									<span class="sidebar-normal">Regular Forms</span>
								</a>
							</li>
							<li>
								<a href="forms/extended.html">
									<span class="sidebar-mini">Ef</span>
									<span class="sidebar-normal">Extended Forms</span>
								</a>
							</li>
							<li>
								<a href="forms/validation.html">
									<span class="sidebar-mini">Vf</span>
									<span class="sidebar-normal">Validation Forms</span>
								</a>
							</li>
							<li>
								<a href="forms/wizard.html">
									<span class="sidebar-mini">W</span>
									<span class="sidebar-normal">Wizard</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<a data-toggle="collapse" href="#tablesExamples">
                        <i class="pe-7s-news-paper"></i>
                        <p>Tables
                           <b class="caret"></b>
                        </p>
                    </a>
					<div class="collapse" id="tablesExamples">
						<ul class="nav">
							<li>
								<a href="tables/regular.html">
									<span class="sidebar-mini">RT</span>
									<span class="sidebar-normal">Regular Tables</span>
								</a>
							</li>
							<li>
								<a href="tables/extended.html">
									<span class="sidebar-mini">ET</span>
									<span class="sidebar-normal">Extended Tables</span>
								</a>
							</li>
							<li>
								<a href="tables/bootstrap-table.html">
									<span class="sidebar-mini">BT</span>
									<span class="sidebar-normal">Bootstrap Table</span>
								</a>
							</li>
							<li>
								<a href="tables/datatables.net.html">
									<span class="sidebar-mini">DT</span>
									<span class="sidebar-normal">DataTables.net</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<a data-toggle="collapse" href="#mapsExamples">
                        <i class="pe-7s-map-marker"></i>
                        <p>Maps
                           <b class="caret"></b>
                        </p>
                    </a>
					<div class="collapse" id="mapsExamples">
						<ul class="nav">
							<li>
								<a href="maps/google.html">
									<span class="sidebar-mini">GM</span>
									<span class="sidebar-normal">Google Maps</span>
								</a>
							</li>
							<li>
								<a href="maps/vector.html">
									<span class="sidebar-mini">VM</span>
									<span class="sidebar-normal">Vector maps</span>
								</a>
							</li>
							<li>
								<a href="maps/fullscreen.html">
									<span class="sidebar-mini">FSM</span>
									<span class="sidebar-normal">Full Screen Map</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li>
                    <a href="charts.html">
                        <i class="pe-7s-graph1"></i>
                        <p>Charts</p>
                    </a>
                </li>

                <li>
                    <a href="calendar.html">
                        <i class="pe-7s-date"></i>
                        <p>Calendar</p>
                    </a>
                </li>
				<li>
					<a data-toggle="collapse" href="#pagesExamples">
                        <i class="pe-7s-gift"></i>
                        <p>Pages
                           <b class="caret"></b>
                        </p>
                    </a>
					<div class="collapse" id="pagesExamples">
						<ul class="nav">
							<li>
								<a href="pages/user.html">
									<span class="sidebar-mini">UP</span>
									<span class="sidebar-normal">User Page</span>
								</a>
							</li>
							<li>
								<a href="pages/login.html">
									<span class="sidebar-mini">LP</span>
									<span class="sidebar-normal">Login Page</span>
								</a>
							</li>
							<li>
								<a href="pages/register.html">
									<span class="sidebar-mini">RP</span>
									<span class="sidebar-normal">Register Page</span>
								</a>
							</li>
							<li>
								<a href="pages/lock.html">
									<span class="sidebar-mini">LSP</span>
									<span class="sidebar-normal">Lock Screen Page</span>
								</a>
							</li>
						</ul>
					</div>
				</li>
			</ul>
    	</div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.sidebar-wrapper{
	padding-right: 1rem;
    overflow: hidden;
  }
  .sidebar-wrapper:hover{
	overflow-y: overlay;
  }
</style>