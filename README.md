

# nodejs-jdg

![](http://gdurl.com/BMA9)

## Pre-requisites
* Openshift 3.1
* Red Hat JBoss xPaaS datagrid 6.5 images installed : [instructions] (https://docs.openshift.com/enterprise/3.1/using_images/xpaas_images/data_grid.html)
 
## Installation of template
The template of this demo is under openshiftv3-templates

As a cluster-admin, on the CLI, run the following command to install template:

`oc create -f /path/to/nodejs-datagrid65-template.json -n openshift`

## Usage
### Web Console
Template will be installed under the _'Instant Apps'_  as **nodejs-datagrid65-example**, (You may need to search for it or click on the 'see all' link to view the template) 

### CLI
As a project adminstrator, run this 

`oc new-app nodejs-datagrid65-example`

### Clustered DG nodes
  To test clustering feature of DG nodes by increasing the number of replicas, you need to ensure the following commands are run by the project admin before attempting to scale up the nodes
  
  
  `oc policy add-role-to-user view system:serviceaccount:$(oc project -q):default -n $(oc project -q)`
  
  `oc policy add-role-to-user view system:serviceaccount:$(oc project -q):eap-service-account -n $(oc project -q)`

### Parameters

Some of the parameters used in the template, the rest are self-explanatory

* APPLICATION_NAME

  Name of application, default to demo
* SOURCE_REPOSITORY_URL

  git repo of nodejs sample app
* SOURCE_REPOSITORY_REF

  branch name, not required for demo
* CONTEXT_DIR

  not required for demo
*  APPLICATION_DOMAIN

  application domain for node js app
*  DG_HOSTNAME_HTTP

  application domain for jdg nodes. for external text via rest api

 
  
  
  