<?php
$string = file_get_contents("./students.sample.json");

$Data= json_decode($string, true);

if(isset($_GET['option'])){

    switch ($_GET['option']) {

        case 'list_all':
            foreach ($Data as $key => $value) {
                echo '"'.$key.'":"'.$value.'"<br>';
            }
            break;

        case 'search':
            if(isset($Data[$_GET['ID']]) ){
                echo 'Hello,'.$Data[$_GET['ID']];
                return;
            }   
            echo 'Student not found';
            break;

        default:
            break;
    }
    unset($_GET['option']);
}

if(isset($_POST['option'])){

    switch ($_POST['option']) {

        
        case 'add':
            if(isset($Data[$_POST['ID']]) ){
                echo 'added ID already exists. Add Failed!';
                return;
            }
            $newID=htmlspecialchars($_POST['ID']);
            $newNAME=htmlspecialchars($_POST['NAME']);
            $Data[$newID] = $newNAME;
            $Data = json_encode($Data);
            file_put_contents('students.sample.json', $Data);
            echo 'Add Succeeded!';
            break;
            
        case 'delete':
            $deleteData=htmlspecialchars($_POST['ID']);
            if(!isset($Data[$deleteData]) ){
                echo 'Student not found. Delete Failed!';
                return;
            }
            unset($Data[$deleteData]);
            $Data = json_encode($Data);
            file_put_contents('students.sample.json', $Data);
            echo 'Success!';
            return;
            
            
            break;

        default:
            break;
    }
    unset($_POST['option']);
}
?>
