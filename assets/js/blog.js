$(document).ready(function() {

    const blogPosts = JSON.parse(localStorage.getItem(`blogKey`));//BlogKey is local key
    const $blogPostContainer = $(`#blogContainer`);//div id

    blogPosts.reverse();//fixed issue where most recent blog was appending to the bottom. Now most recent goes to top.

    $.each(blogPosts, function(index, blogPost){

    const $postElement = $(`<div>`).addClass(`blog-post`);
    const $titleElement = $(`<h2>`).text(blogPost.title).addClass(`underline`);
    const $contentElement = $(`<p>`).text(blogPost.content);
    const $usernameElement =$(`<p>`).text("Posted by " + blogPost.username);

    $postElement.append($titleElement, $contentElement, $usernameElement);

    $blogPostContainer.append($postElement);

    //styling, not sure if this is appropriate to have in my JS, but wanted to experiment. Could had added classes to CSS style it.

    $postElement.css({
        "border": "3px solid black",
        "margin-bottom": "1rem"
    });

    $titleElement.css({
        "margin-left": "1rem",
        "font-size": "18px",
        
    });

    $contentElement.css({
        "margin-left": "1.5rem",
        "font-weight": "bold"

    });

    $usernameElement.css({
        "margin-left": "1rem",
        "font-size": "14px",
        "margin-bottom": "0"

    })

    });
});