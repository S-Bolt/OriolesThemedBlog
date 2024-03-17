$(document).ready(function() {

    const blogPosts = JSON.parse(localStorage.getItem(`blogKey`));//BlogKey is local key
    const $blogPostContainer = $(`#blogContainer`);//div id

    blogPosts.reverse();//fixed issue where most recent blog was appending to the bottom. Now most recent goes to top.

    $.each(blogPosts, function(index, blogPost){

    const $postElement = $(`<div>`).addClass(`blog-post`);
    const $titleElement = $(`<h2>`).text(blogPost.title).addClass(`title`);
    const $contentElement = $(`<p>`).text(blogPost.content).addClass(`content`);
    const $usernameElement =$(`<p>`).text("Posted by " + blogPost.username).addClass(`username`);

    $postElement.append($titleElement, $contentElement, $usernameElement);

    $blogPostContainer.append($postElement);

    });
});