# angular-mystars
Angular module to Star Ratings


## Getting Started

You can install an angular-mystars package easily using Bower:

```shell
bower install angular-mystars
```

And add the files to your index page:

```html
<link rel="stylesheet" href="angular-mystars/angular-mystars.css" />
<script src="angular-mystars/angular-mystars.js"></script>
```

Finally add ''angular-mystars'' to your main module's list of dependencies:

```js
angular.module('myApp', [
	...
    ''angular-mystars'',
    ...
]);
```

## How to use

To get it working simply add this block of code to your view:

```html
<div ng-controller="MyStarController">
    <h4>Vote this: <span ng-repeat="rating in ratings">
        <div star-rating rating-value="rating.current" max="rating.max" on-rating-selected="getSelectedRating(rating)"></div>
        <span class="smallText"><b>Votes:</b> {{rating.current - 1}} of {{rating.max}}</span>
        </span>
    </h4>
</div>
```

