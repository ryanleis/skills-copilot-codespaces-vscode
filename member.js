function skillsMember() {
  var member = {
    init: function() {
      this.bindEvents();
    },

    bindEvents: function() {
      var $element = $('.js-skills-member-list');
      $element.on('click', '.js-skills-member-remove', this.removeSkill);
    },

    removeSkill: function() {
      var $element = $(this);
      var $parent = $element.parents('.js-skills-member-item');
      var $input = $parent.find('.js-skills-member-input');
      var skill = $input.val();
      $parent.remove();
      var $list = $('.js-skills-member-list');
      var $template = $list.find('.js-skills-member-template');
      if (skill) {
        $template.find('.js-skills-member-input').val(skill);
        $list.append($template.html());
      }
    },
  };

  member.init();
}