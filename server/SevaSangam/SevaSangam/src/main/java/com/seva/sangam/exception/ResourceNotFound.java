package com.seva.sangam.exception;

public class ResourceNotFound extends RuntimeException {
    String resourcename;
    String fieldName;
    Long id;

    public ResourceNotFound(String rname, String fname, Long dId){
        super(String.format("%s not found with %s = %s", fname, rname, dId ));
        this.fieldName = fname;
        this.resourcename = rname;
        this.id = dId;
    }
}
