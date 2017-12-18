String.prototype.trimEnd = String.prototype.trimEnd ? String.prototype.trimEnd : function() {
	if(String.prototype.trimRight) {
		return this.trimRight();
	} else if(String.prototype.trim) {
		var trimmed = this.trim();
		var indexOfWord = this.indexOf(trimmed);
		
		return this.slice(indexOfWord, this.length);
	}
};