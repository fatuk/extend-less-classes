<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Bootstrap experiments</title>
	<link rel="stylesheet" href="css/all.css">
</head>
<body>
	<div class="container">
		<div class="header">
			<div class="top-menu">
				{% include "blocks/top-menu.html" %}
			</div>
			<div class="top-info">
				<div class="current-city">
					{% include "blocks/current-city.html" %}
				</div>
			</div>
		</div>

		<div class="main-panel">
			{% include "blocks/main-panel.html" %}
		</div>

		<div class="banners">
			<ul class="banners__list">
				<li class="banners__place">
					{% include "blocks/big-banner.html" %}
				</li>
				<li class="banners__place">
					{% include "blocks/big-banner.html" %}
				</li>
				<li class="banners__place">
					{% include "blocks/big-banner.html" %}
				</li>
			</ul>
		</div>

		<div class="products-tiles">
			{% include "blocks/products-tiles.html" %}
		</div>

		<div class="footer">
			{% include "blocks/footer.html" %}
		</div>
		
	</div>
</body>
</html>