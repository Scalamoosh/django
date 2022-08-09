'use strict';
{
    const $ = django.jQuery;

    $.fn.djangoAdminSelect2 = function() {
        $.each(this, function(i, element) {
            $(element).select2({
                ajax: {
                    data: (params) => {
                        return {
                            term: params.term,
                            page: params.page,
                            app_label: element.dataset.appLabel,
                            model_name: element.dataset.modelName,
                            field_name: element.dataset.fieldName
                        };
                    }
                }
            });
            $(element).on('select2:selecting', function(e) {
                alert();
            });
        });
        return this;
    };

    $(function() {
        $('.js-list-filter.admin-autocomplete').djangoAdminSelect2();
    });
}
