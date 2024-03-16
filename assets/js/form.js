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
        //clear form after submission
        $(`#blogForm`)[0].reset();
    });
});