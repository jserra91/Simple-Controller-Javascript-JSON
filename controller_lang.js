var idioma = 'es_ES';

function getTraduction(key) {
	return literals[idioma][key];
}

function changeLang(lang) {
	idioma = lang;
}