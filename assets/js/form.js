//Handle the form submission
$(document).ready(function(){
    $(`#blogForm`).submit(function(event){
        event.preventDefault();

        const username = $(`#username`).val();
        const title = $(`#title`).val();
        const content = $(`#content`).val();

        //preventing blank submission
        if (!username.trim() || !title.trim() || !content.trim()) {
            alert(`All field need to be filled out.`);
            return;
        } //works
        //console loging inputs
        console.log(`Username:`, username);
        console.log(`title:` , title);
        console.log(`content:` , content);
        //works
    
        //turning data into object
        const blogPost = {
            username: username,
            title: title,
            content: content,
        };
        console.log(blogPost);//works

        let currentPost = JSON.parse(localStorage.getItem(`blogKey`));

        // Ensure currentPosts is an array- wihout this line it returns null
            if (!Array.isArray(currentPost)) {
                currentPost = [];
            };
            //

        currentPost.push(blogPost);
        localStorage.setItem(`blogKey`, JSON.stringify(currentPost));

        //clear form after submission
        $(`#blogForm`)[0].reset(); 

        window.location.href = `blogindex.html`;//sends user to second page.
                
    });
    //toggle  
    $(`.navbar-toggler`).click(function() {
        $(`body`).toggleClass(`dark-mode`);
    });
});

