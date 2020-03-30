'use strict';

// eslint-disable-next-line no-extend-native, consistent-return
String.prototype.trimEnd = String.prototype.trimEnd || function () {
	if (String.prototype.trimRight) {
		return this.trimRight();
	}
	if (String.prototype.trim) {
		var trimmed = this.trim();
		var indexOfWord = this.indexOf(trimmed);

		return this.slice(indexOfWord, this.length);
	}
};
